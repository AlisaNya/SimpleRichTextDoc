# Blueprint workflows

First add a Simple Rich Text Block to a Widget Blueprint, enable **Is Variable**, and use its variable as the Target of these nodes. The [node index](/blueprints/) describes every pin.

## Build a message

1. Create a Make Simple Rich Text Segment struct with Text `Score: ` and your chosen color.
2. Call [Add Segment](/blueprints/nodes/add-segment), then add another struct containing the score. Save its returned index.
3. Later call [Set Segment Text](/blueprints/nodes/set-segment-text) with that index and the updated score converted to Text.

## Change color or size

Call [Get Segment Count](/blueprints/nodes/get-segment-count) to ensure the index exists, then call [Set Segment Color](/blueprints/nodes/set-segment-color) or [Set Segment Size](/blueprints/nodes/set-segment-size). Indices start at zero; removing a segment changes later indices.

## Change font or typeface safely

There is no dedicated Set Segment Font node. Get the widget's read-only **Segments** array, get the struct at the desired index, and copy it. Change its Font and Typeface fields, preserving Color and Size. Pass that struct and index to [Set Segment Format](/blueprints/nodes/set-segment-format). The node preserves the segment's text but replaces all formatting. Confirm the selected typeface exists in the font.

## Build from one field

Set Segment Separator to `|` and call [Set Combined Text With Formats](/blueprints/nodes/set-combined-text-with-formats) with `HP: |100` and an array of two format structs. Their Text fields are ignored; the pieces receive the formats in order. See [input modes](/guide/input-modes) for empty pieces and positional behavior.
