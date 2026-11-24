# Set All Segments Color

Apply one color to every existing segment.

**Category:** SimpleRichText · **Type:** Callable · **Target:** Simple Rich Text Block

## Pins

| Pin | Type | Direction | Meaning |
| --- | --- | --- | --- |
| Target | Simple Rich Text Block reference | Input | Widget to inspect or update. |
| Exec / Then | Execution | Input / Output | Runs this operation and continues execution. |
| New Color | Linear Color | Input | Color assigned to every segment. |

## Example

1. In a Widget Blueprint, select your Simple Rich Text Block and enable **Is Variable**.
2. In the graph, drag its variable into the graph as a reference and create **Set All Segments Color** from it.
3. Connect a yellow Linear Color to New Color.
4. Connect an execution wire to run the node.

**Result:** All existing segments become yellow; their text and other formatting stay unchanged.

## Behavior and edge cases

An empty list remains empty. The widget refreshes even when there are no segments.

Successful operations regenerate the widget's standard Text from its segments; manually authored markup can be replaced. Indices are zero-based.

See [Blueprint recipes](/blueprints/recipes), [segment formatting](/guide/segments), and [`SetAllSegmentsColor` in C++](/cpp/functions#setallsegmentscolor).
