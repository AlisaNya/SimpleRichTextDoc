# Set Formats

Apply formats to existing segments in order, preserving their text.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Formats | Array of Simple Rich Text Segment | Input | Ordered formats; Text fields are ignored. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Formats** from it.
3. Make two format structs, then connect their array to Formats for a widget with three segments.
4. Connect an execution wire to run the node.

**Result:** The first two formats apply to segments 0 and 1; the third segment reuses the second format.

## Behavior and edge cases

An empty array does nothing. Extra formats beyond the segment count are unused.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetFormats` in C++](/cpp/functions#setformats).
