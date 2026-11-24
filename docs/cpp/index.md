# C++ integration

Add the runtime module to your module's `.Build.cs`:

```csharp
PublicDependencyModuleNames.AddRange(new string[] { "SimpleRichText" });
```

Use a private dependency instead if the plugin's types are only used in your module's private implementation. Include `SimpleRichTextBlock.h` where the complete type is required.

```cpp
#include "SimpleRichTextBlock.h"

// RichText must be a valid USimpleRichTextBlock*.
FSimpleRichTextSegment Greeting;
Greeting.Text = FText::FromString(TEXT("Hello, "));
Greeting.Color = FLinearColor::White;
FSimpleRichTextSegment Name;
Name.Text = FText::FromString(TEXT("world!"));
Name.Color = FLinearColor(1.0f, 0.3f, 0.4f);
Name.Size = 28;
RichText->SetSegments({Greeting, Name});
```

See [types and properties](/cpp/types), the [complete function reference](/cpp/functions), and [decorator and extension points](/cpp/internals). `USimpleRichTextBlock` derives from `URichTextBlock`; standard inherited APIs remain available.
