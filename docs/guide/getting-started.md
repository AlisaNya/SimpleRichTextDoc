# Getting started

Simple Rich Text adds **Simple Rich Text Block**, a `URichTextBlock` subclass that generates rich-text markup from an ordered list of formatted segments.

## Requirements and installation

The plugin was developed and built with Unreal Engine 5.7. Its descriptor currently allows Win64; other engine versions and platforms are not verified. A C++ build environment configured for your engine is required.

1. Clone or copy the plugin into your project's `Plugins/SimpleRichText` folder, with `SimpleRichText.uplugin` directly inside it.
2. Regenerate project files and build your project.
3. Open the project. If necessary, enable **SimpleRichText** under **Edit → Plugins**, then restart when prompted.

## Your first widget

1. Open a Widget Blueprint. In the palette's **Simple** category, add **Simple Rich Text Block**.
2. Select it and find **Text Segments** in Details. Add a segment, enter `Hello `, and pick a color.
3. Add a second segment containing `world!`. Choose a different color and open its formatting menu to adjust font, typeface, or size.
4. Compile and preview the widget. The pieces appear together, and the standard Text property holds generated markup.
5. To control the widget in a graph, select it and enable **Is Variable**. Drag its reference into the graph and search for a [Blueprint node](/blueprints/).

Continue with [segments and formatting](/guide/segments), [input modes](/guide/input-modes), or [C++ setup](/cpp/).
