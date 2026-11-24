# Build Markup

Generate the rich-text markup for the current segments.

**Category:** SimpleRichText · **Type:** Pure (no execution pins) · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Return Value | String | Output | Generated markup, without changing the widget. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Build Markup** from it.
3. Connect Return Value to a Print String node to inspect the current generated markup.
4. Connect the return value to a node that uses it.

**Result:** Nonempty segments produce `seg` runs with color and any configured font, typeface, or positive size.

## Behavior and edge cases

Empty segments are omitted. This pure node returns markup without writing it to Text; segment mutation functions refresh Text separately.

The returned value reflects the current segment array. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`BuildMarkup` in C++](/cpp/functions#buildmarkup).
