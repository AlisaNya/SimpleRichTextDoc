# Set Segment Format

Replace a segment's color, font, typeface, and size while preserving its text.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Index | Integer | Input | Zero-based segment index. |
| Format | Simple Rich Text Segment | Input | Replacement formatting; its Text is ignored. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Segment Format** from it.
3. Read the desired segment from the Segments array, copy its struct, change Font and Typeface, and pass the modified struct as Format with the same Index.
4. Connect an execution wire to run the node.

**Result:** The selected segment uses the new font and typeface, while its text and copied color and size remain unchanged.

## Behavior and edge cases

This replaces all format fields, not only Font. Copy the existing struct first to preserve other values. Invalid indices do nothing.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetSegmentFormat` in C++](/cpp/functions#setsegmentformat).
