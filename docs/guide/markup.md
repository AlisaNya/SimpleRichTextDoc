# Markup, rebuilding, and fonts

Each nonempty segment becomes a `seg` run. The automatically registered decorator starts from the widget's default text style and applies the run's attributes.

```xml
<seg c="FF0000FF" f="/Game/Fonts/Roboto.Roboto" tf="Bold" s="32">Hello</>
```

| Attribute | Meaning |
| --- | --- |
| `c` | Color as sRGB `RRGGBBAA`; always present. |
| `f` | Font soft object path, omitted when unset. |
| `tf` | Typeface name, omitted when None. |
| `s` | Positive size, omitted when zero or negative. |

Segment text escapes backslashes and angle brackets. Empty segment text produces no run. You can enter markup manually in the standard Text property, but a segment update regenerates Text and replaces it. **Always Rebuild From Segments** is off by default; enabling it also regenerates on load, synchronization, and widget rebuild.

Font paths are loaded when the decorator creates a run. Ensure the font assets are cooked and available in packaged builds; verify the result in a packaged application. If loading fails, the decorator retains the base font object.

## Troubleshooting

- **Manual markup disappears:** a segment operation or the rebuild option regenerated Text. Keep authored markup separately or disable rebuilding when appropriate.
- **Wrong piece has a style:** single-field formatting follows position. Check separators and segment order.
- **Font looks unchanged:** verify the font asset, typeface name, base style, and packaged asset availability.
- **Text is missing:** check for empty segment text and inspect [Build Markup](/blueprints/nodes/build-markup).
