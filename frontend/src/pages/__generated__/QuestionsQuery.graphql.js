/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type QuestionsQueryVariables = {||};
export type QuestionsQueryResponse = {|
  +getAllQandA: $ReadOnlyArray<{|
    +_id: string,
    +question: string,
    +answers: $ReadOnlyArray<string>,
  |}>
|};
export type QuestionsQuery = {|
  variables: QuestionsQueryVariables,
  response: QuestionsQueryResponse,
|};
*/


/*
query QuestionsQuery {
  getAllQandA {
    _id
    question
    answers
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "QandA",
    "kind": "LinkedField",
    "name": "getAllQandA",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "QuestionsQuery",
    "selections": (v0/*: any*/),
    "type": "RootQuery",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "QuestionsQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6b52599779650c7bcf6c880d9e8cc389",
    "id": null,
    "metadata": {},
    "name": "QuestionsQuery",
    "operationKind": "query",
    "text": "query QuestionsQuery {\n  getAllQandA {\n    _id\n    question\n    answers\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '2b4d966458f670812a40667b4fe3aa78';

module.exports = node;
