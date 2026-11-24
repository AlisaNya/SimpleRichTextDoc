# Set Segments

Replace the complete segment array with supplied values.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| In Segments | Array of Simple Rich Text Segment | Input | The new ordered segments. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Segments** from it.
3. Create an array with two Make Simple Rich Text Segment values: text `Hello ` and `world!`; connect it to In Segments.
4. Connect an execution wire to run the node.

**Result:** The widget displays both pieces in array order. Existing segments are replaced, including their formatting.

## Behavior and edge cases

Values are copied directly; unlike Add Segment, no neighboring format is inherited.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetSegments` in C++](/cpp/functions#setsegments).
