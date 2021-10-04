import { updateHandler, createHandler } from "../components/Events/Handlers";
import QuestionList from "../components/Events/QuestionList";
import AuthContext from "../components/Context/authContext";
import { graphql, QueryRenderer } from "react-relay";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";
import RelayEnvironment from "../environment";
import ErrorBoundary from "./ErrorBound";
import React, { Component } from "react";
import "./Questions.css";

export default class QuestionsPage extends Component {
	state = {
		isLoading: false,
		creating: false,
		onUpdate: false,
		title: "Add question",
	};
	static contextType = AuthContext;

	constructor(props) {
		super(props);
		this.questionRef = React.createRef();
		this.answerAref = React.createRef();
		this.answerBref = React.createRef();
		this.answerCref = React.createRef();
		this.answerDref = React.createRef();
		this.answerEref = React.createRef();
		this.updateId = "";
	}

	componentDidMount() {
		// Executes when page loads
		this.fetchQuestions();
	}

	startCreateQuestionHandler = () => {
		this.setState({ creating: true, title: "Add question" });
	};

	updateQuestionHandler = (questionId, questions, setQuestions) => {
		this.setState({ onUpdate: true, title: "Update question" });
		this.updateId = questionId;
	};

	modalConfirmHandler = () => {
		this.setState({ creating: false });
		const question = this.questionRef.current.value;
		const answers = [];

		if (question.trim().length === 0) 
			return;

		answers.push(this.answerAref.current.value.toString());
		answers.push(this.answerBref.current.value.toString());
		answers.push(this.answerCref.current.value.toString());
		answers.push(this.answerDref.current.value.toString());
		answers.push(this.answerEref.current.value.toString());

		for (let i = 0; i < 5; i++) {
			if (answers[i].trim().length === 0) 
				return;
		}

		if (this.state.onUpdate) {
			this.setState({ onUpdate: false, title: "Add question" });
			updateHandler(this.updateId, question, answers);
		}else{
			createHandler(question, answers);
		}
	};

	modalCancelHandler = () => {
		this.setState({ creating: false, onUpdate: false });
	};

	fetchQuestions() {
		return (
			<QueryRenderer
				environment={RelayEnvironment}
				query={graphql`
					query QuestionsQuery {
						getAllQandA {
							_id
							question
							answers
						}
					}
				`}
				variables={{}}
				render={({ error, props }) => {
					if (props) 
						return <QuestionList questions={props.getAllQandA} token={this.context.token} canUpdate={this.updateQuestionHandler}/>;
				}}
			/>
		);
	}

	render() {
		return (
			<ErrorBoundary>
				<React.Fragment>
					{(this.state.onUpdate || this.state.creating) && <div className="backdrop"></div> && (
							<Modal title={this.state.title} canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
								<form>
									<div className="form-control form-questions">
										<label>
											Question
											<input type="text" ref={this.questionRef}></input>
										</label>
									</div>
									<div className="form-control form-answers">
										<label>
											Answers
											<input type="text" ref={this.answerAref}></input>
											<input type="text" ref={this.answerBref}></input>
											<input type="text" ref={this.answerCref}></input>
											<input type="text" ref={this.answerDref}></input>
											<input type="text" ref={this.answerEref}></input>
										</label>
									</div>
								</form>
							</Modal>
						)}
					{this.context.token && (
						<div className="events-control">
							<p>Create your questions and answers</p>
							<button id="create-question" className="btn" onClick={this.startCreateQuestionHandler}>
								Create question
							</button>
						</div>
					)}
					{this.state.isLoading ? <Spinner /> : this.fetchQuestions()}
				</React.Fragment>
			</ErrorBoundary>
		);
	}
}