# Segments and formatting

A segment is one piece of text and its formatting. Segments appear in array order; the plugin inserts no spaces between them. Include spaces in the text where needed.

| Field | Type | Default and behavior |
| --- | --- | --- |
| Text | Text | Segment content; may be empty or multiline. |
| Color | Linear Color | White. Each segment supplies its own color. |
| Font | Soft object reference | Unset uses the block's base font. Editor selection permits Font and Font Face assets. |
| Typeface | Name | None uses the base typeface; use a name present in the chosen font. |
| Size | Integer | Zero uses the base size. Positive values override it. |

In Details, edit the text and color in each row; open the formatting menu for font, typeface, and size. The row's plus button inserts after it and copies its format; minus removes it. The Blueprint/C++ Add and Insert functions take supplied text and color, but inherit missing font and nonpositive size from a neighbor. For exact behavior see [Add Segment](/blueprints/nodes/add-segment) and [Insert Segment](/blueprints/nodes/insert-segment).

At runtime, use [Set Segment Format](/blueprints/nodes/set-segment-format) to change font or typeface. Copy the existing segment first if you need to retain its other formatting: the node replaces all format fields.
