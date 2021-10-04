import { graphql, commitMutation } from "react-relay";
import RelayEnvironment from "../../environment";

const mutation = graphql`
	mutation updateQandAMutation(
		$_id: ID!
		$question: String!
		$answers: [String!]!
	) {
		updateQandA(_id: $_id, question: $question, answers: $answers) {
			_id
			question
			answers
		}
	}
`;

export default function updateQuestion(id, question, answers) {
	const variables = {
        _id: id,
        question: question,
        answers: answers,
    };

	commitMutation(RelayEnvironment, {
		mutation,
		variables,
		onCompleted: (res, err) => {
			console.log("Response received from server.");
		},
		onError: (err) => {
			console.log(err);
		},
	});
}