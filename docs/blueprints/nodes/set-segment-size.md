# Set Segment Size

Change one segment's font size.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Index | Integer | Input | Zero-based segment index. |
| New Size | Integer | Input | Font size; zero uses the block default. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Segment Size** from it.
3. Set Index to `1` and New Size to `32`.
4. Connect an execution wire to run the node.

**Result:** The second segment uses size 32.

## Behavior and edge cases

Negative values are clamped to zero. An invalid index does nothing.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetSegmentSize` in C++](/cpp/functions#setsegmentsize).
