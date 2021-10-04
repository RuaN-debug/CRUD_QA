import { graphql, commitMutation } from "react-relay";
import RelayEnvironment from "../../environment";

const mutation = graphql`
	mutation createQandAMutation($question: String!, $answers: [String!]!) {
		addQandA(question: $question, answers: $answers) {
			_id
			question
			answers
		}
	}
`;

export default function createQuestion(newQuestion, newAnswers) {
	const variables = {
        question: newQuestion,
        answers: newAnswers,
    };
	commitMutation(RelayEnvironment, {
		mutation,
		variables,
		onCompleted: (res, err) => {
			console.log("Response received from server.");
			const [questions, setQuestions] = window.globalQuestions;
			const updatedQuestions = [...questions];
			updatedQuestions.push({
				_id: res.addQandA._id,
				question: newQuestion,
				answers: newAnswers,
			});
			setQuestions(updatedQuestions);
		},
		onError: (err) => {
			console.log(err);
		},
	});
}