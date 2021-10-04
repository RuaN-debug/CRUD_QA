import AuthContext from "../components/Context/authContext";
import { graphql, QueryRenderer } from "react-relay";
import createUser from "./mutations/createUser";
import RelayEnvironment from "../environment";
import React, { Component } from "react";
import "./Auth.css";

export default class AuthPage extends Component {
	state = {
		isLogin: true,
		userExists: true,
		userSignupExists: true,
		userSignedUp: false,
		errorString: "",
		email: null,
		password: null,
	};

	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.emailRef = React.createRef();
		this.passwordRef = React.createRef();
		this.errorTest = false;
	}

	switchModeHandler = () => {
		this.setState((prevState) => {
			return { isLogin: !prevState.isLogin };
		});
	};

	loginUser(){
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				query={graphql`
					query AuthQuery($email: String!, $password: String!) {
						login(email: $email, password: $password) {
							userId
							token
							tokenExpiration
						}
					}
				`}
				variables={{
					email: this.state.email,
					password: this.state.password,
				}}
				render={({ error, props }) => {
					if (props){
						this.context.login(
							props.login.token,
							props.login.userId,
							props.login.tokenExpiration,
						);
					}
					if(error){
						this.errorTest = true;
					}
				}}
			/>
		);
	}
	
	submitHandler = (event) => {
		event.preventDefault();
		const email = this.emailRef.current.value;
		const password = this.passwordRef.current.value;

		if (email.trim().length === 0 || password.trim().length === 0) 
			return;
		
		if(this.state.isLogin){
			this.setState({ email: email, password: password });
			if(this.errorTest){
				console.log("Erro");
				this.errorTest = false;
				this.setState({ userSignupExists: true, userExists: false, errorString: "User does not exist or password is incorrect!" });
			}
		}else{
			this.setState({ userSignedUp: true, userSignupExists: true, userExists: true, errorString: "User signed up!" });
			createUser(email, password);
		}
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
				{this.state.email && <div>{this.loginUser()}</div>}
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