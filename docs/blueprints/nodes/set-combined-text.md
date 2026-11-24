# Set Combined Text

Split a text value using the current Segment Separator and replace segment texts.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| New Combined Text | Text | Input | Text to split using Segment Separator. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set Combined Text** from it.
3. Set Segment Separator to `|`, then pass `Hello|world`.
4. Connect an execution wire to run the node.

**Result:** Two segments contain `Hello` and `world`, retaining existing formats by position.

## Behavior and edge cases

Empty pieces are retained. An empty separator produces one segment. Extra pieces copy the last existing format, or use a default segment if none exists; excess old segments are removed.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetCombinedText` in C++](/cpp/functions#setcombinedtext).
