import assert from 'node:assert/strict';
import { createContentPipelineReferenceGraph } from '@x12i/graphenix-authoring-format';
import { validateTaskNode } from '@x12i/graphenix-task-node-format';

const graph = createContentPipelineReferenceGraph();
const task = graph.graph.nodes.find(node => node.kind === 'task');
assert(task);
const errors = validateTaskNode(task, graph);
assert.equal(errors.length, 0, JSON.stringify(errors));
const invalid = { ...task, parameters: {} };
assert(validateTaskNode(invalid, graph).length > 0);
console.log({ taskId: task.id, errors });
