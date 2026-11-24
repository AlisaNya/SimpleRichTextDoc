# Decorator and extension points

The runtime module registers `FSimpleRichTextDecorator` automatically in `USimpleRichTextBlock::CreateDecorators`. The decorator recognizes `seg` runs and creates Slate text runs based on the owning block's default style. See [markup](/guide/markup).

## Public decorator API

Include `SimpleRichTextDecorator.h`. The constructor takes an owning `const URichTextBlock*`; `Supports` tests the run name, and `Create` constructs a Slate run for the parsed content. These implement the `ITextDecorator` interface and are primarily relevant when extending Slate rendering.

`FSimpleRichTextDecorator::EscapeText(const FString& In)` returns a string with backslash, `<`, and `>` escaped. `UnescapeText(const FString& In)` reverses those recognized escapes. `SimpleRichTextTags::Tag`, `AttrColor`, `AttrFont`, `AttrTypeface`, and `AttrSize` define the generated tag and attribute names.

## Widget lifecycle

Public overrides `SynchronizeProperties` and `PostLoad`, plus editor-only `PostEditChangeProperty` and `GetPaletteCategory`, participate in Unreal's widget lifecycle. Protected overrides `RebuildWidget` and `CreateDecorators` integrate Slate. Protected helpers `InheritMissingFormat` and `NotifySegmentsChanged` implement format inheritance and segment refresh. These are extension points, not normal runtime calls; preserve superclass behavior when overriding them.

The editor module provides `FSimpleRichTextBlockCustomization` for Details panel rows. It is editor-only and should not be treated as a packaged runtime API.
