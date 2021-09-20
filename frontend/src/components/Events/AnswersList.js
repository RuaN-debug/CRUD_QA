import React from "react";
import "./QuestionList.css";

const AnswersList = (props) => {
	const answers = props.answers.map((answer, index) => (
		<li key={index}>{answer}</li>
	));

	return <ol className="list-answers">{answers}</ol>;
};

export default AnswersList;
