import { graphql, commitMutation } from "react-relay";
import RelayEnvironment from "../../environment";

const mutation = graphql`
    mutation deleteQandAMutation($_id: ID!) {
        deleteQandA(_id: $_id) {
            _id
            question
        }
    }
`;

export default function deleteQuestion(questionId) {                    
    const variables = {
        _id: questionId
    };

    commitMutation(RelayEnvironment, {
        mutation,
        variables,
        onCompleted: (res, err) => {
            console.log('Response received from server.');
        },
        onError: err => {
            console.log(err);
        }
    });
}