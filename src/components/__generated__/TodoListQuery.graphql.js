/**
 * @generated SignedSource<<bc2b051b4d3fd085d12d6e3248c48798>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type TodoListQuery$variables = {||};
export type TodoListQuery$data = {|
  +todos: $ReadOnlyArray<{|
    +completed: boolean,
    +description: string,
    +id: string,
    +title: string,
    +user: {|
      +id: string,
      +name: string,
    |},
  |}>,
|};
export type TodoListQuery = {|
  response: TodoListQuery$data,
  variables: TodoListQuery$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todos",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "description",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "user",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "name",
            "storageKey": null
          }
        ],
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
    "name": "TodoListQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "57ffdb58077eec8c0b86fe3d7818fb0f",
    "id": null,
    "metadata": {},
    "name": "TodoListQuery",
    "operationKind": "query",
    "text": "query TodoListQuery {\n  todos {\n    id\n    title\n    description\n    completed\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "d3e25d1157466621b9c183f6b32aded2";

module.exports = ((node/*: any*/)/*: Query<
  TodoListQuery$variables,
  TodoListQuery$data,
>*/);
