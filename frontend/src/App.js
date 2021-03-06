import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import MainNavigation from "./components/Navigation/MainNavigation";
import AuthContext from "./components/Context/authContext";
import QuestionsPage from "./pages/Questions";
import React, { Component } from "react";
import AuthPage from "./pages/Auth";
import "./App.css";

class App extends Component {
	state = {
		token: null,
		userId: null,
		tokenExpiration: null,
	};

	login = (token, userId, tokenExpiration) => {
		this.setState({
			token: token,
			userId: userId,
			tokenExpiration: tokenExpiration,
		});
	};

	logout = () => {
		this.setState({ token: null, userId: null });
	};

	render() {
		return (
			<BrowserRouter className="App">
				<React.Fragment>
					<AuthContext.Provider
						value={{
							token: this.state.token,
							userId: this.state.userId,
							tokenExpiration: this.state.tokenExpiration,
							login: this.login,
							logout: this.logout,
						}}
					>
						<MainNavigation />
						<main className="main-content">
							<Switch>
								{this.state.token && <Redirect from="/" to="/questions" exact />}
								{this.state.token && <Redirect from="/auth" to="/questions" exact />}
								{!this.state.token && <Route path="/auth" component={AuthPage} />}
								<Route path="/questions" component={QuestionsPage} />
								{!this.state.token && <Redirect to="/auth" exact />}
							</Switch>
						</main>
					</AuthContext.Provider>
				</React.Fragment>
			</BrowserRouter>
		);
	}
}

export default App;
