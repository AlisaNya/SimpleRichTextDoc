# Set Segment Text

Change the text of one segment, retaining its format.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| Index | Integer | Input | Zero-based segment index. |
| New Text | Text | Input | Replacement text. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Segment Text** from it.
3. Set Index to `0` and New Text to `Hello`.
4. Connect an execution wire to run the node.

**Result:** The first segment displays `Hello` with its previous formatting.

## Behavior and edge cases

An invalid index does nothing. In single-field mode this also updates Combined Text.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetSegmentText` in C++](/cpp/functions#setsegmenttext).
