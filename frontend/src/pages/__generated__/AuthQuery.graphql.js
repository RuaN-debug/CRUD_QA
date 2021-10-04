/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type AuthQueryVariables = {|
  email: string,
  password: string,
|};
export type AuthQueryResponse = {|
  +login: {|
    +userId: string,
    +token: string,
    +tokenExpiration: number,
  |}
|};
export type AuthQuery = {|
  variables: AuthQueryVariables,
  response: AuthQueryResponse,
|};
*/


/*
query AuthQuery(
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
    "name": "AuthQuery",
    "selections": (v1/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AuthQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5fc1ef19e3b5171fc1b69819edcf5a24",
    "id": null,
    "metadata": {},
    "name": "AuthQuery",
    "operationKind": "query",
    "text": "query AuthQuery(\n  $email: String!\n  $password: String!\n) {\n  login(email: $email, password: $password) {\n    userId\n    token\n    tokenExpiration\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ee5dd299c89d0a17cf9ed318a10bd46c';

module.exports = node;
