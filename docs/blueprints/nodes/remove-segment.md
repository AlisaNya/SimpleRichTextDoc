# Remove Segment

Remove one segment and shift later indices down.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Index | Integer | Input | Zero-based index of the segment to remove. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Remove Segment** from it.
3. With segments `A`, `B`, `C`, remove Index `1`.
4. Connect an execution wire to run the node.

**Result:** The remaining segments are `A`, `C`; `C` is now at index 1.

## Behavior and edge cases

An invalid index does nothing. In single-field mode Combined Text is rebuilt.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`RemoveSegment` in C++](/cpp/functions#removesegment).
