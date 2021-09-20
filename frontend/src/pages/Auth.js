import AuthContext from "../components/Context/authContext";
import React, { Component } from "react";
import "./Auth.css";

class AuthPage extends Component {
	state = {
		isLogin: true,
		userExists: true,
		userSignupExists: true,
		userSignedUp: false,
		errorString: ""
	};

	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
	}

	switchModeHandler = () => {
		this.setState((prevState) => {
			return { isLogin: !prevState.isLogin };
		});
	};

	submitHandler = (event) => {
		event.preventDefault();
		const email = this.emailRef.current.value;
		const password = this.passwordRef.current.value;

		if (email.trim().length === 0 || password.trim().length === 0) {
			return;
		}

		let requestBody = {
			query: `
                query{
                    login(email: "${email}", password: "${password}"){
                        userId
                        token
                        tokenExpiration
                    }
                }
            `,
		};

		if (!this.state.isLogin) {
			requestBody = {
				query: `
                    mutation{
                        addUser(email: "${email}", password: "${password}"){
                            _id
                            email
                        }
                    }
                `,
			};
		}

		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
			},
		})
		.then((res) => {
			if (res.status !== 200 && res.status !== 201) {
				throw new Error("Failed!");
			}
			return res.json();
		})
		.then((resData) => {
			if (this.state.isLogin && resData.data.login.token) {
				this.context.login(
					resData.data.login.token,
					resData.data.login.userId,
					resData.data.login.tokenExpiration
				);
			}else{
				this.setState({ userSignedUp: true, userSignupExists: true, userExists: true, errorString: "User signed up!" });
			}
		})
		.catch((err) => {
			if(this.state.isLogin){
				this.setState({ userSignupExists: true, userExists: false, errorString: "User does not exist or password is incorrect!" });
			}else{
				this.setState({ userExists: true, userSignupExists: false, errorString: "User already exists!" })
			}
			this.setState({ userSignedUp: false });
			console.log(err);
		});
	};

	render() {
		return (
			<form className="auth-form" onSubmit={this.submitHandler}>
				<div className="form-control form-user">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" ref={this.emailRef}></input>
				</div>
				<div className="form-control form-user">
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						ref={this.passwordRef}
					></input>
				</div>
				{this.state.userSignedUp && <div className="user-signedup">
					{this.state.errorString}
				</div>}
				{!this.state.userExists && <div className="user-test">
					{this.state.errorString}
				</div>}
				{!this.state.userSignupExists && <div className="user-test-signup">
					{this.state.errorString}
				</div>}
				<div className="form-actions">
					<button id="submit" type="submit">Submit</button>
					<button type="button" onClick={this.switchModeHandler}>
						Switch to {this.state.isLogin ? "Signup" : "Login"}
					</button>
				</div>
			</form>
		);
	}
}

export default AuthPage;
