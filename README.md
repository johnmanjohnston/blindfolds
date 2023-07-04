# Blindfolds

Blindfolds is a JavaScript-based library I made for making presentations. I was probably drunk when I named it.
I made this last year when I was assigned to create a presentation, and was too lazy to create it within PowerPoint. 

# Usage 
To get started, create an HTML file and link `main.css` and create a JavaScript file that should be linked as a `module`. For example:
```js
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blindfolds</title>
    <link rel="stylesheet" href="./main.css" />
</head>
<body>
    <script src="./index.js" type="module"></script>
</body>
</html>
```

In your JavaScript file, import Blindfolds:
```js
import * as BLINDFOLDS from "./Blindfolds.js";
```

You can then initialize a new presentation like so:
```js
// Intiailize the Blindfolds library
var Presentation = new BLINDFOLDS.BlindfoldsPresentation({
    SlideCount: 5,
    FixedHTML: `
        <div style="color: rgba(255, 255, 255, 0.5); padding: 0.8vw; font-size: 0.7vw;">
            Blindfolds |SLCOUNT|
        </div>
    `,
    PresentationName: "Blindfolds",
})
```

The parameters are pretty self-explanatory: `SlideCount` is the number of slides. `FixedHTML` is some HTML code that's overlaid over the presentation. `PresentationName` is the presentation name.

You may want to create a template for your slides for consistency in the slide designs:
```js
// Create Template
const SlideTemplateConfiguration = {
    BackgroundColor: "rgb(30, 30, 35)",
    FontColor: "#E5E5E5",
    
    TitleFontSize: "4vw",
    ContentFontSize: "2vw",

    AdditionalTitleClasses: "Type",
    AdditionalContentClasses: "Type",

    ExtraHTML: `
        <div style="width: 100%; height: 5vh; background: rgba(0, 0, 10, 0.2); position: absolute; bottom: 0;"></div>
    `,
}
```

`BackgroundColor` is the background color used. `FontColor` is the color of the text. `TitleFontSize` controls the font size of the title, and `ContentFontSize` controls the font size of the content
