/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type createQandAMutationVariables = {|
  question: string,
  answers: $ReadOnlyArray<string>,
|};
export type createQandAMutationResponse = {|
  +addQandA: {|
    +_id: string,
    +question: string,
    +answers: $ReadOnlyArray<string>,
  |}
|};
export type createQandAMutation = {|
  variables: createQandAMutationVariables,
  response: createQandAMutationResponse,
|};
*/


/*
mutation createQandAMutation(
  $question: String!
  $answers: [String!]!
) {
  addQandA(question: $question, answers: $answers) {
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
  "name": "answers"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "question"
},
v2 = [
  {
    "alias": null,
    "args": [
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
    "name": "addQandA",
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
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "createQandAMutation",
    "selections": (v2/*: any*/),
    "type": "RootMutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "createQandAMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "25ab96e4a14c45d233cc75d85cba77cd",
    "id": null,
    "metadata": {},
    "name": "createQandAMutation",
    "operationKind": "mutation",
    "text": "mutation createQandAMutation(\n  $question: String!\n  $answers: [String!]!\n) {\n  addQandA(question: $question, answers: $answers) {\n    _id\n    question\n    answers\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '806716608d36b5ee6ac1d47584facca5';

module.exports = node;
