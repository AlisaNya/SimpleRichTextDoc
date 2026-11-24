# Set Combined Text With Formats

Split text and apply an array of formats in one call.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| New Combined Text | Text | Input | Text to split. |
| Formats | Array of Simple Rich Text Segment | Input | Formats assigned by position; their Text fields are ignored. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Combined Text With Formats** from it.
3. Set the separator to `|`, supply `Red|Blue`, and connect two segment structs with red and blue colors.
4. Connect an execution wire to run the node.

**Result:** Two pieces appear with the supplied colors.

## Behavior and edge cases

Extra pieces reuse the last format. With an empty format array, pieces use default formatting. Empty pieces are retained.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetCombinedTextWithFormats` in C++](/cpp/functions#setcombinedtextwithformats).
