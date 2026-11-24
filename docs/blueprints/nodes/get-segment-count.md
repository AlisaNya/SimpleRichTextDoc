# Get Segment Count

Return the number of segments.

**Category:** SimpleRichText · **Type:** Pure (no execution pins) · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Return Value | Integer | Output | Current segment count. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Get Segment Count** from it.
3. Connect the result to a text conversion or use it to check whether index `0` exists.
4. Connect the return value to a node that uses it.

**Result:** A widget with three segments returns `3`.

## Behavior and edge cases

This pure node does not modify the widget.

The returned value reflects the current segment array. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`GetSegmentCount` in C++](/cpp/functions#getsegmentcount).
