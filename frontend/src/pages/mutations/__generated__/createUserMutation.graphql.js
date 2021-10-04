/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createUserMutationVariables = {|
  email: string,
  password: string,
|};
export type createUserMutationResponse = {|
  +addUser: {|
    +_id: string,
    +email: string,
  |}
|};
export type createUserMutation = {|
  variables: createUserMutationVariables,
  response: createUserMutationResponse,
|};
*/


/*
mutation createUserMutation(
  $email: String!
  $password: String!
) {
  addUser(email: $email, password: $password) {
    _id
    email
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "email"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "password"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "email",
        "variableName": "email"
      },
      {
        "kind": "Variable",
        "name": "password",
        "variableName": "password"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "addUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "_id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "email",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "createUserMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "createUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d67a0df0831fb8bea8a3e817efa944ff",
    "id": null,
    "metadata": {},
    "name": "createUserMutation",
    "operationKind": "mutation",
    "text": "mutation createUserMutation(\n  $email: String!\n  $password: String!\n) {\n  addUser(email: $email, password: $password) {\n    _id\n    email\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '53ad537ad31358c6dcd975470e9070cd';

module.exports = node;
