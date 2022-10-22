/**
 * @generated SignedSource<<4ac272015483d194e2a15e95e3a9228b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type TodoListItemTodoUpdateCompletedMutation$variables = {|
  completed: boolean,
  todoId: string,
|};
export type TodoListItemTodoUpdateCompletedMutation$data = {|
  +todoUpdateCompleted: ?{|
    +completed: boolean,
    +id: string,
  |},
|};
export type TodoListItemTodoUpdateCompletedMutation = {|
  response: TodoListItemTodoUpdateCompletedMutation$data,
  variables: TodoListItemTodoUpdateCompletedMutation$variables,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "completed"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "todoId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "completed",
        "variableName": "completed"
      },
      {
        "kind": "Variable",
        "name": "todoId",
        "variableName": "todoId"
      }
    ],
    "concreteType": "Todo",
    "kind": "LinkedField",
    "name": "todoUpdateCompleted",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "completed",
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
    "name": "TodoListItemTodoUpdateCompletedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoListItemTodoUpdateCompletedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "d5f06fe102a1f293d501aff015da117c",
    "id": null,
    "metadata": {},
    "name": "TodoListItemTodoUpdateCompletedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoListItemTodoUpdateCompletedMutation(\n  $completed: Boolean!\n  $todoId: ID!\n) {\n  todoUpdateCompleted(completed: $completed, todoId: $todoId) {\n    id\n    completed\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "96c5644f6753684278e8d8b475055ea1";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoListItemTodoUpdateCompletedMutation$variables,
  TodoListItemTodoUpdateCompletedMutation$data,
>*/);
