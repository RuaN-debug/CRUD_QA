/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginUserQueryVariables = {|
  email: string,
  password: string,
|};
export type LoginUserQueryResponse = {|
  +login: {|
    +userId: string,
    +token: string,
    +tokenExpiration: number,
  |}
|};
export type LoginUserQuery = {|
  variables: LoginUserQueryVariables,
  response: LoginUserQueryResponse,
|};
*/


/*
query LoginUserQuery(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
    userId
    token
    tokenExpiration
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
    "concreteType": "AuthData",
    "kind": "LinkedField",
    "name": "login",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "userId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "token",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "tokenExpiration",
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
    "name": "LoginUserQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LoginUserQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f92ce73981fa16fee61d62056ea12c7",
    "id": null,
    "metadata": {},
    "name": "LoginUserQuery",
    "operationKind": "query",
    "text": "query LoginUserQuery(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    userId\n    token\n    tokenExpiration\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'bfc7ff2e63c7d91c3d94acf03669fcb5';

module.exports = node;
