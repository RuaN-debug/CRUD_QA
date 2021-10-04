import { graphql, commitMutation } from "react-relay";
import RelayEnvironment from "../../environment";

const mutation = graphql`
    mutation createUserMutation($email: String!, $password: String!){
        addUser(email: $email, password: $password){
            _id
            email
        }
    }
`;

export default function createUser(newEmail, newPassword) {                    
    const variables = {
        email: newEmail,
        password: newPassword
    };

    commitMutation(RelayEnvironment, {
        mutation,
        variables,
        onCompleted: (res, err) => {
            console.log('Response received from server.');
        },
        onError: err => {
            //this.setState({ userSignedUp: false, userExists: true, userSignupExists: false, errorString: "User already exists!" })
            console.log(err);
        }
    });
}