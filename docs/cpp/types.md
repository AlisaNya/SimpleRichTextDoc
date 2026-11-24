# C++ types and properties

Declared in `SimpleRichTextBlock.h`. For field defaults and usage see [segments](/guide/segments).

## FSimpleRichTextSegment

| Member | Type | Default |
| --- | --- | --- |
| `Text` | `FText` | Empty |
| `Color` | `FLinearColor` | White |
| `Font` | `TSoftObjectPtr<UObject>` | Unset; editor accepts `UFont` or `UFontFace`. |
| `Typeface` | `FName` | None |
| `Size` | `int32` | 0; use base style size. |

The struct is BlueprintType and its members are BlueprintReadWrite. Text is multiline in the editor. The editor's size UI range does not impose a general runtime maximum.

## ESimpleRichTextInputMode

`PerSegment` displays individual fields; `SingleField` edits text split by a separator. See [input modes](/guide/input-modes).

## USimpleRichTextBlock properties

| Property | Blueprint access | Meaning |
| --- | --- | --- |
| `Segments` | Read only | Ordered segment array; use functions to mutate and refresh. |
| `bAlwaysRebuildFromSegments` | Read/write | Defaults false; rebuilds Text on load, synchronization, and widget rebuild when enabled. |
| `InputMode` | Read/write | Defaults to `PerSegment`. |
| `CombinedText` | Read only | Text split in single-field mode; use Set Combined Text to change it. |
| `SegmentSeparator` | Read/write | Split/join string, default `\|`. |

Changing writable properties directly is not itself a substitute for calling the appropriate update function at runtime. Segment operations can overwrite manually set Text.
