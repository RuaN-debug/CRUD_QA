import React from "react";

const AnswersList = (props) => {
    const answersList = props.answers.toString().split(',');

	const answers = answersList.map((answer, index) => <li key={index}>{answer}</li>);

	return <ol>{answers}</ol>;
}

export default AnswersList;