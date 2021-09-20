import AuthContext from "../components/Context/authContext";
import QuestionList from "../components/Events/QuestionList";
import Spinner from "../components/Spinner/Spinner";
import Modal from "../components/Modal/Modal";
import React, { Component } from "react";
import "./Questions.css";

import ErrorBoundary from "./ErrorBound";

class QuestionsPage extends Component {
	state = {
		isLoading: false,
		creating: false,
		onUpdate: false,
		title: "Add question",
		questions: [],
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

	deleteQuestionHandler = (questionId) => {
		this.setState({ isLoading: true });

		const requestBody = {
			query: `
                mutation{
                    deleteQandA(_id: "${questionId}"){
                        _id
                        question
                    }
                }
            `,
		};
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.context.token,
			},
		})
			.then((res) => {
				if (res.status !== 200 && res.status !== 201) {
					throw new Error("Failed!");
				}
				return res.json();
			})
			.then((resData) => {
				this.setState((prevState) => {
					const updatedQuestions = prevState.questions.filter(
						(question) => {
							return question._id !== questionId;
						}
					);
					return { questions: updatedQuestions, isLoading: false };
				});
			})
			.catch((err) => {
				console.log(err);
				this.setState({ isLoading: false });
			});
	};

	updateQuestionHandler = (questionId) => {
		this.setState({ onUpdate: true, title: "Update question" });
		this.updateId = questionId;
	};

	modalConfirmHandler = () => {
		this.setState({ creating: false });
		const question = this.questionRef.current.value;
		const answers = [];
		answers.push(this.answerAref.current.value.toString());
		answers.push(this.answerBref.current.value.toString());
		answers.push(this.answerCref.current.value.toString());
		answers.push(this.answerDref.current.value.toString());
		answers.push(this.answerEref.current.value.toString());

		let requestBody;
		if(this.state.onUpdate){
			requestBody = {
				query: `
					mutation UpdateQandA($_id: ID!, $question: String!, $answers: [String!]!){
						updateQandA(_id: $_id, question: $question, answers: $answers){
							_id
							question
							answers
						}
					}
				`,
				variables: {
					_id: this.updateId,
					question: question,
					answers: answers
				}
			};
		}else{
			requestBody = {
				query: `
					mutation AddQandA($question: String!, $answers: [String!]!){
						addQandA(question: $question, answers: $answers){
							_id
							question
							answers
						}
					}
				`,
				variables:{
					question: question,
					answers: answers
				}
			};
		}
		fetch("http://localhost:8000/graphql", {
			method: "POST",
			body: JSON.stringify(requestBody),
			headers: {
				"Content-Type": "application/json",
				Authorization: "Bearer " + this.context.token,
			},
		})
		.then((res) => {
			if (res.status !== 200 && res.status !== 201) {
				throw new Error("Failed!");
			}
			return res.json();
		})
		.then((resData) => {
			if(this.state.onUpdate){
				this.setState({ onUpdate: false, title: "Add question" });
				this.fetchQuestions();
			}else{
				this.setState((prevState) => {
					const updatedQuestions = [...prevState.questions];
					updatedQuestions.push({
						_id: resData.data.addQandA._id,
						question: resData.data.addQandA.question,
						answers: resData.data.addQandA.answers,
					});
					return { questions: updatedQuestions };
				});
			}
		})
		.catch((err) => {
			console.log(err);
			this.setState({ isLoading: false });
		});
	};

	modalCancelHandler = () => {
		this.setState({ creating: false, onUpdate: false });
	};
	fetchQuestions(){
		this.setState({ isLoading: true });
		const requestBody = {
			query: `
                query{
                    getAllQandA{
                        _id
                        question
                        answers
                    }
                }
            `,
		};
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
			const questions = resData.data.getAllQandA;
			this.setState({ questions: questions, isLoading: false });
		})
		.catch((err) => {
			console.log(err);
			this.setState({ isLoading: false });
		});
	}

	render() {
		return (
			<ErrorBoundary>
				<React.Fragment>
					{(this.state.onUpdate || this.state.creating) && <div className="backdrop"></div>}
					{(this.state.onUpdate || this.state.creating) && (
						<Modal
							title={this.state.title}
							canCancel
							canConfirm
							canUpdate
							onCancel={this.modalCancelHandler}
							onConfirm={this.modalConfirmHandler}
							questions={this.state.questions}
						>
							<form>
								<div className="form-control">
									<label>
										Question
										<input type="text" ref={this.questionRef}></input>
									</label>
								</div>
								<div className="form-control">
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
							<button
								className="btn"
								onClick={this.startCreateQuestionHandler}
							>
								Create question
							</button>
						</div>
					)}
					{this.state.isLoading ? (
						<Spinner />
					) : (
						<QuestionList
							questions={this.state.questions}
							token={this.context.token}
                            onDelete={this.deleteQuestionHandler}
							canUpdate={this.updateQuestionHandler}
						/>
					)}
				</React.Fragment>
			</ErrorBoundary>
		);
	}
}

export default QuestionsPage;
