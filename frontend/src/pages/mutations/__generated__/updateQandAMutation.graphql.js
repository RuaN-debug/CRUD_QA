/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type updateQandAMutationVariables = {|
  _id: string,
  question: string,
  answers: $ReadOnlyArray<string>,
|};
export type updateQandAMutationResponse = {|
  +updateQandA: {|
    +_id: string,
    +question: string,
    +answers: $ReadOnlyArray<string>,
  |}
|};
export type updateQandAMutation = {|
  variables: updateQandAMutationVariables,
  response: updateQandAMutationResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "_id"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "answers"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "question"
},
v3 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "_id",
        "variableName": "_id"
      },
      {
        "kind": "Variable",
        "name": "answers",
        "variableName": "answers"
      },
      {
        "kind": "Variable",
        "name": "question",
        "variableName": "question"
      }
    ],
    "concreteType": "QandA",
    "kind": "LinkedField",
    "name": "updateQandA",
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
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "answers",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateQandAMutation",
    "selections": (v3/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v2/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Operation",
    "name": "updateQandAMutation",
    "selections": (v3/*: any*/)
  },
  "params": {
    "cacheID": "cbe9352669ffdd73b5daf7cbf589ba50",
    "id": null,
    "metadata": {},
    "name": "updateQandAMutation",
    "operationKind": "mutation",
    "text": "mutation updateQandAMutation(\n  $_id: ID!\n  $question: String!\n  $answers: [String!]!\n) {\n  updateQandA(_id: $_id, question: $question, answers: $answers) {\n    _id\n    question\n    answers\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '304f1a7de03cca64ca2060c0ef768dd3';

module.exports = node;
