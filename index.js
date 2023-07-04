import * as BLINDFOLDS from "./Blindfolds.js";

// Initialize the Blindfolds library
var Presentation = new BLINDFOLDS.BlindfoldsPresentation({
    SlideCount: 5,
    FixedHTML: `
        <div style="color: rgba(255, 255, 255, 0.5); padding: 0.8vw; font-size: 0.7vw;">
            Blindfolds &mdash; Ethan John |SLCOUNT|
        </div>
    `,
    PresentationName: "Blindfolds",
})

// Template
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

// Slide generation
var TitleSlide = new BLINDFOLDS.BlindfoldsSlide({
    ...SlideTemplateConfiguration,

    Title: "This Is {{Blindfolds}}.",
    Content: "A {{JavaScript-based presentation library}} I programmed a while ago.",
    
    AdditionalTitleStyling: "position: absolute; top: 45vh; left: 50%; transform: translate(-50%, -50%);",
    AdditionalContentStyling: "text-align: center; position: absolute; top: 57%; left: 50%; transform: translate(-50%, -50%);",
    
    ContentFontSize: "1.2vw",
    TitleFontSize: "4.4vw",
})

var Intro = new BLINDFOLDS.BlindfoldsSlide({
    ...SlideTemplateConfiguration,

    Title: "What Is {{Blindfolds}}?",
    Content: `
        This is a library I programmed to make presentations. I programmed
        this a while ago for personal use. The pros of using Blindfolds, are:
        <ul>
            <li>Blindfolds is extremely {{lightweight}}!</li>
            <li>Blindfolds is {{easy to set up}}, just import the Blindfolds.js, and 
            main.css files!</li>
        </ul>
    `, 
})

var UseInstructions = new BLINDFOLDS.BlindfoldsSlide({
    ...SlideTemplateConfiguration,

    Title: "{{How}} to Use This Scuffed Library?",
    Content: "You can refer to the README.md file at the git repository\n(<a style='color: gray;' href='https://github.com/johnmanjohnston/blindfolds'>https://github.com/johnmanjohnston/blindfolds</a>).",
})

var End = new BLINDFOLDS.BlindfoldsSlide({
    ...SlideTemplateConfiguration,

    Title: "The {{End}}.",
    Content: `
        Thanks for checking out this scuffed library! 
    `,
    
    AdditionalTitleStyling: "position: absolute; top: 45vh; left: 50%; transform: translate(-50%, -50%);",
    AdditionalContentStyling: "text-align: center; position: absolute; top: 61vh; left: 50%; transform: translate(-50%, -50%);",

    TitleFontSize: "8vw",
})

Presentation.Run([TitleSlide, Intro, UseInstructions, End]);

/*
--
_______  _________  ___  ___  ________  ________              ___  ________  ___  ___  ________     
|\  ___ \|\___   ___\\  \|\  \|\   __  \|\   ___  \           |\  \|\   __  \|\  \|\  \|\   ___  \    
\ \   __/\|___ \  \_\ \  \\\  \ \  \|\  \ \  \\ \  \          \ \  \ \  \|\  \ \  \\\  \ \  \\ \  \   
 \ \  \_|/__  \ \  \ \ \   __  \ \   __  \ \  \\ \  \       __ \ \  \ \  \\\  \ \   __  \ \  \\ \  \  
  \ \  \_|\ \  \ \  \ \ \  \ \  \ \  \ \  \ \  \\ \  \     |\  \\_\  \ \  \\\  \ \  \ \  \ \  \\ \  \ 
   \ \_______\  \ \__\ \ \__\ \__\ \__\ \__\ \__\\ \__\    \ \________\ \_______\ \__\ \__\ \__\\ \__\
    \|_______|   \|__|  \|__|\|__|\|__|\|__|\|__| \|__|     \|________|\|_______|\|__|\|__|\|__| \|__|

2022
*/
