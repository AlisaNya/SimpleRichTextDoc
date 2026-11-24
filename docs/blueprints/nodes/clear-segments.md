# Clear Segments

Remove all segments and refresh the widget.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |


## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Clear Segments** from it.
3. Call Clear Segments on the widget.
4. Connect an execution wire to run the node.

**Result:** The segment count becomes zero and generated Text becomes empty.

## Behavior and edge cases

This overwrites manually authored Text with empty generated markup. Preserve any text you need before calling it.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`ClearSegments` in C++](/cpp/functions#clearsegments).
