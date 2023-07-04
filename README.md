# Blindfolds

Blindfolds is a JavaScript-based library I made for making presentations. I was probably drunk when I named it.
I made this last year when I was assigned to create a presentation, and was too lazy to create it within PowerPoint. 

# Demo
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

`BackgroundColor` is the background color used. `FontColor` is the color of the text. `TitleFontSize` controls the font size of the title, and `ContentFontSize` controls the font size of the content.
`AdditionalTitleClasses` and `AdditionalContentClasses` are additonal classes that are added to the title and the content. In the example above, the `Type` class adds a typing animation. 

To create a slide, you can use the `BlindfoldsSlide` class:

```js
var TitleSlide = new BLINDFOLDS.BlindfoldsSlide({
    ...SlideTemplateConfiguration,

    Title: "Your {{Stupid}} Title Goes Here",
    Content: "mmfhgmf.,. beans are tasty",
    
    AdditionalTitleStyling: "position: absolute; top: 45vh; left: 50%; transform: translate(-50%, -50%);",
    AdditionalContentStyling: "text-align: center; position: absolute; top: 57%; left: 50%; transform: translate(-50%, -50%);",
    
    ContentFontSize: "1.2vw",
    TitleFontSize: "4.4vw",
})
```

We import parameters from the template with `...SlideTemplateConfiguration`. `Title` is the title of the slide. `Content` is the content shown on the slide. `AdditionalTitleStyling` is CSS styling added to the title,
and `AdditionalContentStyling` is CSS styling added to the content.

You may create all your slides in the same manner. To finally run the presenation, we use the object we created to initialize the presentation, and call the `Run()` function and pass the slides in an array
as the only argument.

```js
Presentation.Run([TitleSlide, Slide2, Slide3, End]);
```
