/**
 * @generated SignedSource<<a1c32c32ff3bc15fd6623f37a4b6f2d6>>
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
export type TodoCreateModalMutation$variables = {|
  input: TodoInput,
|};
export type TodoCreateModalMutation$data = {|
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
export type TodoCreateModalMutation = {|
  response: TodoCreateModalMutation$data,
  variables: TodoCreateModalMutation$variables,
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
    "name": "TodoCreateModalMutation",
    "selections": (v2/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoCreateModalMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "14a40ad08db8625dedec6ad8cbeda64a",
    "id": null,
    "metadata": {},
    "name": "TodoCreateModalMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCreateModalMutation(\n  $input: TodoInput!\n) {\n  todoCreate(input: $input) {\n    id\n    title\n    description\n    completed\n    user {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "3f13e8951b709409cca1771a30ac6426";

module.exports = ((node/*: any*/)/*: Mutation<
  TodoCreateModalMutation$variables,
  TodoCreateModalMutation$data,
>*/);
