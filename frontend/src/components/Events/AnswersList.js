import React from "react";

const AnswersList = (props) => {
	const answers = props.answers.map((answer, index) => <li key={index}>{answer}</li>);

	return <ol>{answers}</ol>;
}

export default AnswersList;