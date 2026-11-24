# Insert Segment

Insert a segment at a position, shifting later segments.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Index | Integer | Input | Insertion position, clamped to the range from zero through the segment count. |
| New Segment | Simple Rich Text Segment | Input | Text, color, and optional formatting. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Insert Segment** from it.
3. With segments `A` and `C`, insert a segment containing `B` at Index `1`.
4. Connect an execution wire to run the node.

**Result:** The order becomes `A`, `B`, `C`.

## Behavior and edge cases

Missing font and nonpositive size inherit from the preceding segment; at index zero they inherit from the first existing segment. Typeface is inherited only when Font is unset and Typeface is also unset.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`InsertSegment` in C++](/cpp/functions#insertsegment).
