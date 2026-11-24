# C++ function reference

Include `SimpleRichTextBlock.h` and add `SimpleRichText` to your module dependencies. Functions below belong to `USimpleRichTextBlock` unless stated otherwise. Indices are zero-based. A valid widget pointer is assumed in examples.

## SetSegments

```cpp
void SetSegments(const TArray<FSimpleRichTextSegment>& InSegments);
```

Replace the complete segment array with supplied values. The widget displays both pieces in array order. Existing segments are replaced, including their formatting. Values are copied directly; unlike Add Segment, no neighboring format is inherited.

**Parameters and result:** `In Segments` (Array of Simple Rich Text Segment, input): The new ordered segments.

[Blueprint node](/blueprints/nodes/set-segments).

## SetCombinedText

```cpp
void SetCombinedText(const FText& NewCombinedText);
```

Split a text value using the current Segment Separator and replace segment texts. Two segments contain `Hello` and `world`, retaining existing formats by position. Empty pieces are retained. An empty separator produces one segment. Extra pieces copy the last existing format, or use a default segment if none exists; excess old segments are removed.

**Parameters and result:** `New Combined Text` (Text, input): Text to split using Segment Separator.

[Blueprint node](/blueprints/nodes/set-combined-text).

## SetCombinedTextWithFormats

```cpp
void SetCombinedTextWithFormats(const FText& NewCombinedText, const TArray<FSimpleRichTextSegment>& Formats);
```

Split text and apply an array of formats in one call. Two pieces appear with the supplied colors. Extra pieces reuse the last format. With an empty format array, pieces use default formatting. Empty pieces are retained.

**Parameters and result:** `New Combined Text` (Text, input): Text to split. `Formats` (Array of Simple Rich Text Segment, input): Formats assigned by position; their Text fields are ignored.

[Blueprint node](/blueprints/nodes/set-combined-text-with-formats).

## SetSegmentText

```cpp
void SetSegmentText(int32 Index, const FText& NewText);
```

Change the text of one segment, retaining its format. The first segment displays `Hello` with its previous formatting. An invalid index does nothing. In single-field mode this also updates Combined Text.

**Parameters and result:** `Index` (Integer, input): Zero-based segment index. `New Text` (Text, input): Replacement text.

[Blueprint node](/blueprints/nodes/set-segment-text).

## SetSegmentColor

```cpp
void SetSegmentColor(int32 Index, FLinearColor NewColor);
```

Change one segment's color. The first segment becomes red; its other fields are preserved. An invalid index does nothing. The widget refreshes its generated text.

**Parameters and result:** `Index` (Integer, input): Zero-based segment index. `New Color` (Linear Color, input): Replacement color.

[Blueprint node](/blueprints/nodes/set-segment-color).

## SetAllSegmentsColor

```cpp
void SetAllSegmentsColor(FLinearColor NewColor);
```

Apply one color to every existing segment. All existing segments become yellow; their text and other formatting stay unchanged. An empty list remains empty. The widget refreshes even when there are no segments.

**Parameters and result:** `New Color` (Linear Color, input): Color assigned to every segment.

[Blueprint node](/blueprints/nodes/set-all-segments-color).

## SetSegmentSize

```cpp
void SetSegmentSize(int32 Index, int32 NewSize);
```

Change one segment's font size. The second segment uses size 32. Negative values are clamped to zero. An invalid index does nothing.

**Parameters and result:** `Index` (Integer, input): Zero-based segment index. `New Size` (Integer, input): Font size; zero uses the block default.

[Blueprint node](/blueprints/nodes/set-segment-size).

## SetSegmentFormat

```cpp
void SetSegmentFormat(int32 Index, const FSimpleRichTextSegment& Format);
```

Replace a segment's color, font, typeface, and size while preserving its text. The selected segment uses the new font and typeface, while its text and copied color and size remain unchanged. This replaces all format fields, not only Font. Copy the existing struct first to preserve other values. Invalid indices do nothing.

**Parameters and result:** `Index` (Integer, input): Zero-based segment index. `Format` (Simple Rich Text Segment, input): Replacement formatting; its Text is ignored.

[Blueprint node](/blueprints/nodes/set-segment-format).

## SetFormats

```cpp
void SetFormats(const TArray<FSimpleRichTextSegment>& Formats);
```

Apply formats to existing segments in order, preserving their text. The first two formats apply to segments 0 and 1; the third segment reuses the second format. An empty array does nothing. Extra formats beyond the segment count are unused.

**Parameters and result:** `Formats` (Array of Simple Rich Text Segment, input): Ordered formats; Text fields are ignored.

[Blueprint node](/blueprints/nodes/set-formats).

## AddSegment

```cpp
int32 AddSegment(const FSimpleRichTextSegment& NewSegment);
```

Append a segment and return its new index. The segment is appended and Return Value identifies it for later updates. Text and color come from the supplied struct. If Font is unset it inherits the previous font, and an unset Typeface inherits that segment's typeface. Size less than or equal to zero inherits the previous size. The first segment has no neighbor to inherit from.

**Parameters and result:** `New Segment` (Simple Rich Text Segment, input): Text, color, and optional formatting for the new segment. `Return Value` (Integer, output): Index assigned to the appended segment.

[Blueprint node](/blueprints/nodes/add-segment).

## InsertSegment

```cpp
void InsertSegment(int32 Index, const FSimpleRichTextSegment& NewSegment);
```

Insert a segment at a position, shifting later segments. The order becomes `A`, `B`, `C`. Missing font and nonpositive size inherit from the preceding segment; at index zero they inherit from the first existing segment. Typeface is inherited only when Font is unset and Typeface is also unset.

**Parameters and result:** `Index` (Integer, input): Insertion position, clamped to the range from zero through the segment count. `New Segment` (Simple Rich Text Segment, input): Text, color, and optional formatting.

[Blueprint node](/blueprints/nodes/insert-segment).

## RemoveSegment

```cpp
void RemoveSegment(int32 Index);
```

Remove one segment and shift later indices down. The remaining segments are `A`, `C`; `C` is now at index 1. An invalid index does nothing. In single-field mode Combined Text is rebuilt.

**Parameters and result:** `Index` (Integer, input): Zero-based index of the segment to remove.

[Blueprint node](/blueprints/nodes/remove-segment).

## ClearSegments

```cpp
void ClearSegments();
```

Remove all segments and refresh the widget. The segment count becomes zero and generated Text becomes empty. This overwrites manually authored Text with empty generated markup. Preserve any text you need before calling it.

**Parameters and result:** No parameters or return value.

[Blueprint node](/blueprints/nodes/clear-segments).

## GetSegmentCount

```cpp
int32 GetSegmentCount() const;
```

Return the number of segments. A widget with three segments returns `3`. This pure node does not modify the widget.

**Parameters and result:** `Return Value` (Integer, output): Current segment count.

[Blueprint node](/blueprints/nodes/get-segment-count).

## GetSegmentText

```cpp
FText GetSegmentText(int32 Index) const;
```

Return the text of one segment. The result is the first segment's text without generated tags. An invalid index returns empty text; that result is indistinguishable from a valid empty segment without checking the count.

**Parameters and result:** `Index` (Integer, input): Zero-based segment index. `Return Value` (Text, output): Text at that index, or empty text if invalid.

[Blueprint node](/blueprints/nodes/get-segment-text).

## GetPlainText

```cpp
FString GetPlainText() const;
```

Join segment texts without markup or separators. The result is `Hello world`. No separator is inserted; spaces must be part of segment text. This pure node does not read manually authored Text.

**Parameters and result:** `Return Value` (String, output): All segment texts concatenated in order.

[Blueprint node](/blueprints/nodes/get-plain-text).

## BuildMarkup

```cpp
FString BuildMarkup() const;
```

Generate the rich-text markup for the current segments. Nonempty segments produce `seg` runs with color and any configured font, typeface, or positive size. Empty segments are omitted. This pure node returns markup without writing it to Text; segment mutation functions refresh Text separately.

**Parameters and result:** `Return Value` (String, output): Generated markup, without changing the widget.

[Blueprint node](/blueprints/nodes/build-markup).


## Usage examples

These snippets assume a valid `USimpleRichTextBlock* RichText` and `#include "SimpleRichTextBlock.h"`. Adjust asset references and displayed values to your project.

```cpp
FSimpleRichTextSegment A;
A.Text = FText::FromString(TEXT("Hello "));
A.Color = FLinearColor::White;
FSimpleRichTextSegment B;
B.Text = FText::FromString(TEXT("world"));
B.Size = 28;

RichText->SetSegments({A, B});
RichText->SetSegmentText(1, FText::FromString(TEXT("Unreal")));
RichText->SetSegmentColor(1, FLinearColor::Red);
RichText->SetAllSegmentsColor(FLinearColor::White);
RichText->SetSegmentSize(1, 32);

// Copy the existing struct so changing the font keeps its other format fields.
if (RichText->Segments.IsValidIndex(1))
{
    FSimpleRichTextSegment Format = RichText->Segments[1];
    Format.Typeface = FName(TEXT("Bold"));
    RichText->SetSegmentFormat(1, Format);
}
RichText->SetFormats({A, B}); // Text fields in A and B are ignored.

const int32 AddedIndex = RichText->AddSegment(B);
RichText->InsertSegment(0, A);
RichText->RemoveSegment(0); // AddedIndex is valid again after this insertion/removal pair.
const int32 Count = RichText->GetSegmentCount();
const FText Text = RichText->GetSegmentText(AddedIndex);
const FString Plain = RichText->GetPlainText();
const FString Markup = RichText->BuildMarkup();

RichText->SegmentSeparator = TEXT("|");
RichText->SetCombinedText(FText::FromString(TEXT("One|Two")));
RichText->SetCombinedTextWithFormats(FText::FromString(TEXT("One|Two")), {A, B});
RichText->ApplyCombinedText();
const FString Combined = RichText->BuildCombinedFromSegments();
RichText->RefreshText();
const FTextBlockStyle& BaseStyle = USimpleRichTextBlock::GetBaseTextStyle(RichText);
RichText->ClearSegments();
```

The array-changing operations above shift indices. Store or recompute indices when adding, inserting, or removing segments. Font assets can be assigned to the copied struct through its soft object pointer; use an asset reference available in the packaged build.

## ApplyCombinedText

```cpp
void ApplyCombinedText();
```

Splits the current `CombinedText` using `SegmentSeparator`, adjusts the array, and refreshes Text. Existing formats are kept by position; new pieces copy the final format or use defaults. Empty pieces are retained. No arguments or return value.

## BuildCombinedFromSegments

```cpp
FString BuildCombinedFromSegments() const;
```

Returns segment texts joined with `SegmentSeparator`, without markup. Does not modify the widget. An empty array returns an empty string.

## RefreshText

```cpp
void RefreshText();
```

Writes `BuildMarkup()` to the standard Text property, replacing manual text. Takes no arguments and returns nothing.

## GetBaseTextStyle

```cpp
static const FTextBlockStyle& GetBaseTextStyle(const URichTextBlock* RichText);
```

Returns the block's default text style by reference. Pass a valid, non-null block; the implementation dereferences the pointer. The referenced style belongs to the widget and must not outlive it.
