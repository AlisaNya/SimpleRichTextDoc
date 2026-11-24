# Input modes

## Per Segment Fields

The default mode gives each segment its own text field and formatting controls. Editing segments generates markup in the widget's standard Text property. In the editor, adding an empty segment does not replace manually authored Text when the generated markup is empty.

## Single Field + Separator

Choose **Single Field + Separator** in Input Mode. Enter combined text and use Segment Separator (default `|`) to divide it. For example, `Hello |beautiful |world|!` produces four pieces, including spaces. Piece 0 uses format 0, piece 1 uses format 1, and so on.

Extra pieces copy the last existing format; reducing the number of pieces removes trailing segments and their formats. Inserting a separator in the middle shifts which format applies to later text. Empty pieces are retained. An empty separator makes the entire string one piece; choose a separator that will not occur as literal content.

When switching to this mode in the editor, existing segments are joined if Combined Text is empty. If it already contains text, that text is applied. Runtime changes to segment text or count synchronize Combined Text in this mode. See [Set Combined Text](/blueprints/nodes/set-combined-text).
