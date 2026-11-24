# Blueprint node reference

These nodes operate on a Simple Rich Text Block reference and appear in the **SimpleRichText** category. Callable nodes require an execution wire; pure nodes return a value when evaluated. Segment indices start at zero.

## Text and arrays

- [Set Segments](/blueprints/nodes/set-segments) — Replace the complete segment array with supplied values.
- [Set Combined Text](/blueprints/nodes/set-combined-text) — Split a text value using the current Segment Separator and replace segment texts.
- [Set Combined Text With Formats](/blueprints/nodes/set-combined-text-with-formats) — Split text and apply an array of formats in one call.

## Formatting

- [Set Segment Text](/blueprints/nodes/set-segment-text) — Change the text of one segment, retaining its format.
- [Set Segment Color](/blueprints/nodes/set-segment-color) — Change one segment's color.
- [Set All Segments Color](/blueprints/nodes/set-all-segments-color) — Apply one color to every existing segment.
- [Set Segment Size](/blueprints/nodes/set-segment-size) — Change one segment's font size.
- [Set Segment Format](/blueprints/nodes/set-segment-format) — Replace a segment's color, font, typeface, and size while preserving its text.
- [Set Formats](/blueprints/nodes/set-formats) — Apply formats to existing segments in order, preserving their text.

## Segment management

- [Add Segment](/blueprints/nodes/add-segment) — Append a segment and return its new index.
- [Insert Segment](/blueprints/nodes/insert-segment) — Insert a segment at a position, shifting later segments.
- [Remove Segment](/blueprints/nodes/remove-segment) — Remove one segment and shift later indices down.
- [Clear Segments](/blueprints/nodes/clear-segments) — Remove all segments and refresh the widget.

## Inspection

- [Get Segment Count](/blueprints/nodes/get-segment-count) — Return the number of segments.
- [Get Segment Text](/blueprints/nodes/get-segment-text) — Return the text of one segment.
- [Get Plain Text](/blueprints/nodes/get-plain-text) — Join segment texts without markup or separators.
- [Build Markup](/blueprints/nodes/build-markup) — Generate the rich-text markup for the current segments.

