# Add Segment

Append a segment and return its new index.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| New Segment | Simple Rich Text Segment | Input | Text, color, and optional formatting for the new segment. |
| Return Value | Integer | Output | Index assigned to the appended segment. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Add Segment** from it.
3. Make a segment with text `world`, connect it to New Segment, and store Return Value.
4. Connect an execution wire to run the node.

**Result:** The segment is appended and Return Value identifies it for later updates.

## Behavior and edge cases

Text and color come from the supplied struct. If Font is unset it inherits the previous font, and an unset Typeface inherits that segment's typeface. Size less than or equal to zero inherits the previous size. The first segment has no neighbor to inherit from.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`AddSegment` in C++](/cpp/functions#addsegment).
