/**
 * @generated SignedSource<<628efc70503148067cabc6d216e14e62>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoInput = {|
  description: string,
  title: string,
|};
export type TodoListCreateMutation$variables = {|
  input: TodoInput,
|};
export type TodoListCreateMutation$data = {|
  +todoCreate: ?{|
    +completed: boolean,
    +description: string,
    +id: string,
    +title: string,
    +user: {|
      +id: string,
      +name: string,
    |},
  |},
|};
export type TodoListCreateMutation = {|
  response: TodoListCreateMutation$data,
  variables: TodoListCreateMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todoCreate",
    "plural": false,
    "selections": [
      (v1/*: any*/),
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
          (v1/*: any*/),
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListCreateMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListCreateMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "37e68d93dc55f6585cbcb42fce8fd3dc",
    "id": null,
    "metadata": {},
    "name": "TodoListCreateMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListCreateMutation(\n  $input: TodoInput!\n) {\n  todoCreate(input: $input) {\n    id\n    title\n    description\n    completed\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "bd89eb9a28e0f878fec3abdc6acaf377";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoListCreateMutation$variables,
  TodoListCreateMutation$data,
>*/);
