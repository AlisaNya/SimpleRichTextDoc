# Get Segment Text

Return the text of one segment.

**Category:** SimpleRichText · **Type:** Pure (no execution pins) · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Index | Integer | Input | Zero-based segment index. |
| Return Value | Text | Output | Text at that index, or empty text if invalid. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Get Segment Text** from it.
3. Connect Index `0` and display Return Value.
4. Connect the return value to a node that uses it.

**Result:** The result is the first segment's text without generated tags.

## Behavior and edge cases

An invalid index returns empty text; that result is indistinguishable from a valid empty segment without checking the count.

The returned value reflects the current segment array. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`GetSegmentText` in C++](/cpp/functions#getsegmenttext).
