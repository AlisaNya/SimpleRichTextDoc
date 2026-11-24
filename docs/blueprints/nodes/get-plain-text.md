# Get Plain Text

Join segment texts without markup or separators.

**Category:** SimpleRichText · **Type:** Pure (no execution pins) · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Return Value | String | Output | All segment texts concatenated in order. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Get Plain Text** from it.
3. Use this node on segments `Hello ` and `world`.
4. Connect the return value to a node that uses it.

**Result:** The result is `Hello world`.

## Behavior and edge cases

No separator is inserted; spaces must be part of segment text. This pure node does not read manually authored Text.

The returned value reflects the current segment array. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`GetPlainText` in C++](/cpp/functions#getplaintext).
