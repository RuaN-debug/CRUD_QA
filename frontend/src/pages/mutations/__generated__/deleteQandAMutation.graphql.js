/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type deleteQandAMutationVariables = {|
  _id: string
|};
export type deleteQandAMutationResponse = {|
  +deleteQandA: {|
    +_id: string,
    +question: string,
  |}
|};
export type deleteQandAMutation = {|
  variables: deleteQandAMutationVariables,
  response: deleteQandAMutationResponse,
|};
*/


/*
mutation deleteQandAMutation(
  $_id: ID!
) {
  deleteQandA(_id: $_id) {
    _id
    question
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "_id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      }
    ],
    "concreteType": "QandA",
    "kind": "LinkedField",
    "name": "deleteQandA",
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
        "name": "question",
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
    "name": "deleteQandAMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "deleteQandAMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "07196ddf8ae1334c5ae0a4906e9475ea",
    "id": null,
    "metadata": {},
    "name": "deleteQandAMutation",
    "operationKind": "mutation",
    "text": "mutation deleteQandAMutation(\n  $_id: ID!\n) {\n  deleteQandA(_id: $_id) {\n    _id\n    question\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '15a0c6c110decb8c32307d0380016d55';

module.exports = node;
