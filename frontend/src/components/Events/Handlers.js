import deleteQandA from "../../pages/mutations/deleteQandA";
import updateQandA from "../../pages/mutations/updateQandA";
import createQandA from "../../pages/mutations/createQandA";

export const deleteHandler = (id) => {
	const [questions, setQuestions] = window.globalQuestions;
	const updatedQuestions = questions.filter((question) => {
		return question._id !== id;
	});
	setQuestions(updatedQuestions);
	return deleteQandA(id);
};

export const updateHandler = (id, newQuestion, newAnswers) => {
	const [questions, setQuestions] = window.globalQuestions;
	const updatedQuestions = questions.filter((question) => {
		return question._id !== id;
	});
	updatedQuestions.push({
		_id: id,
		question: newQuestion,
		answers: newAnswers,
	});
	setQuestions(updatedQuestions);
	return updateQandA(id, newQuestion, newAnswers);
};

export const createHandler = (newQuestion, newAnswers) => {
	return createQandA(newQuestion, newAnswers);
};
