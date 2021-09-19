import AnswersList from "./AnswersList";
import React from "react";
import "./QuestionList.css";

const questionList = (props) => {
	const events = props.questions.map((event) => {
		return (
			<li key={event._id} className="events__list-item">
				<div>
					<h1>{event.question}</h1>
					<h2>
						<AnswersList answers={event.answers} />
					</h2>
				</div>
				<div>
					{props.token && <button className="btn" onClick={props.canUpdate.bind(this, event._id)}>Update</button>}
					{props.token && <button className="btn" onClick={props.onDelete.bind(this, event._id)}>Delete</button>}
				</div>
			</li>
		);
	});
	return <ul className="event__list">{events}</ul>;
};

export default questionList;
