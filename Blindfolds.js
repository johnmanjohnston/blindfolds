/* 
 * DEVELOPMENT START: 26th May 2022
 */

"use strict";
class BlindfoldsPresentation{
    Options = {}
    
    SlideCount = 0;
    FixedHTML = "";
    FixedHTMLElement = undefined;
    PresentationName = "Blindfolds Presentation";

    CurrentSlide = 1;
 
    SlideClasses;

    #NextSlide() {
        if (!this.IsFullscreened)
            return;

        this.CurrentSlide++;

        if (this.CurrentSlide > this.SlideCount) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                } else if (document.webkitExitFullscreen) { /* Safari */
                document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) { /* IE11 */
                document.msExitFullscreen();
            }

            this.CurrentSlide = 0; // yes, 0, not 1. Why? i have no idea.
            this.IsFullscreened = false;
        }

        location.href = "#" + this.CurrentSlide;

        this.SlideClasses[this.CurrentSlide - 1].ReRender();

        this.FixedHTMLElement.innerHTML = this.FixedHTML.replace("<slcount></slcount>", `(Slide: ${this.CurrentSlide})`);
    }

    Run(SlClasses) {
        // Run command to get stuff working, it takes SlClasses which is the slide class objects because you need that to get stuff working
        var Slides = document.getElementsByClassName("Slide");

        // Assign SlideClasses to SlClasses so that we can access elsewhere in this class
        this.SlideClasses = SlClasses;

        // For every slide, add a click event listener 
        for (var i = 0; i < Slides.length; i++) {
            Slides[i].addEventListener("click", () => {
                this.#NextSlide();
            });

            Slides[i].addEventListener("contextmenu", (ev) => {
                ev.preventDefault();
                this.#NextSlide();
            });
        }

        console.log(this.SlideClasses);
    }

    IsFullscreened = false;

    constructor(Options) {
        this.Options = Options;
        this.SlideCount = Options.SlideCount || 0;
        this.FixedHTML = Options.FixedHTML || "";
        this.PresentationName = Options.PresentationName || "Blindfolds Presentation";

        console.log(Options)
        document.title = this.PresentationName;

        
        this.FixedHTMLElement = document.body.appendChild(document.createElement("div"));
        this.FixedHTMLElement.setAttribute("style", "position: fixed; z-index: 10; color: red;");
        this.FixedHTMLElement.innerHTML = this.FixedHTML;
        this.FixedHTML = this.FixedHTML.replace("|SLCOUNT|", "<slcount></slcount>");
        this.FixedHTMLElement.innerHTML = this.FixedHTML.replace("<slcount></slcount>", `(Slide: ${this.CurrentSlide})`);  
        
        // Fullscreen body on first click
        var Body = document.getElementsByTagName("body")[0];
        Body.addEventListener("click", () => {
            if (document.body.requestFullscreen) {
                document.body.requestFullscreen();
                } else if (document.body.webkitRequestFullscreen) { /* Safari */
                document.body.webkitRequestFullscreen();
                } else if (document.body.msRequestFullscreen) { /* IE11 */
                document.body.msRequestFullscreen();
            }

            this.IsFullscreened = true;
        });
    }
}

class BlindfoldsSlide {
    Options = {}

    ContentFontSize = "1.5em";
    TitleFontSize = "2.3em";

    Title = "Lorem Ipsum";
    Content = "Lorem ipsum dolor sit amet";

    BackgroundColor = "rgb(20, 20, 20)";
    FontColor = "rgb(240, 240, 240)";

    ExtraHTML = "";

    AdditionalTitleClasses = "";
    AdditionalContentClasses = "";

    AdditionalTitleStyling = "";
    AdditionalContentStyling = "";
    
    SlideID = "";
    Slide = undefined;
    
    ReRender() {
        this.Slide.innerHTML = `
            <div class="${this.AdditionalTitleClasses} Slide-Title" style="${this.AdditionalTitleStyling} font-size: ${this.TitleFontSize};">${this.Title}</div>
            <div class="${this.AdditionalContentClasses} Slide-Content" style="${this.AdditionalContentStyling} font-size: ${this.ContentFontSize};">${this.Content}</div>
            ${this.ExtraHTML}
        `
    }

    CreateSlide() {
        this.Slide = document.body.appendChild(document.createElement("div"));
        this.Slide.classList.add("Slide");

        // why do you set the SlideID to Slide.id again? I don't know, but it works.
        this.Slide.id = document.getElementsByClassName("Slide").length;
        this.SlideID = this.Slide.id;

        this.Slide.style.backgroundColor = this.BackgroundColor;
        this.Slide.style.color = this.FontColor;
        this.Slide.style.fontSize = this.ContentFontSize;
        this.Slide.style.width = "100vw";
        this.Slide.style.height = "100vh";
        this.Slide.style.position = "relative";
        
        this.Slide.innerHTML = `
            <div class="${this.AdditionalTitleClasses} Slide-Title" style="${this.AdditionalTitleStyling} font-size: ${this.TitleFontSize};">${this.Title}</div>
            <div class="${this.AdditionalContentClasses} Slide-Content" style="${this.AdditionalContentStyling} font-size: ${this.ContentFontSize};">${this.Content}</div>
            ${this.ExtraHTML}
        `

        return this.Slide;
    }

    constructor(Options) {
        this.Options = Options;
        this.ContentFontSize = Options.ContentFontSize || "1.5em";
        this.TitleFontSize = Options.TitleFontSize || "2.3em";

        this.Title = Options.Title || "";
        this.Content = Options.Content || "";

        this.BackgroundColor = Options.BackgroundColor || "rgb(20, 20, 20)";
        this.FontColor = Options.FontColor || "rgb(240, 240, 240)";

        this.AdditionalTitleClasses = Options.AdditionalTitleClasses || "";
        this.AdditionalContentClasses = Options.AdditionalContentClasses || "";

        this.AdditionalTitleStyling = Options.AdditionalTitleStyling || "";
        this.AdditionalContentStyling = Options.AdditionalContentStyling || "";

        this.ExtraHTML = Options.ExtraHTML || "";

        this.Title = this.Title.replace("{__EXTRASPACE__}", "<span style='color: transparent;'>Never gonna give you up! Never gonna let you down!</span>");

        // Simple replacers
        // for some damn reason javascript you don't replace stuff all at once?
        for (var i = 0; i < this.Content.length; i++) {
            this.Content = this.Content.replace("{{", "<span class='Importance'>");
            this.Content = this.Content.replace("}}", "</span>");
            this.Content = this.Content.replace("\n", "<br>");
        }

        for (var i = 0; i < this.Title.length; i++) {
            this.Title = this.Title.replace("{{", "<span class='Importance'>");
            this.Title = this.Title.replace("}}", "</span>");
            this.Title = this.Title.replace("\n", "<br>");
        }

        // Param replacers
        if (this.Content.includes("|WRAP=TRUE|")) {
            this.Content = this.Content.replace("|WRAP=TRUE|", "<div style='white-space: normal;'>");
            this.Content += "</div>"
        }

        this.CreateSlide();
    }
}

class Utils {
    static GetDummyText(Paragraphs) {
        var DummyText = "";
        
        for(var i = 1; i <= Paragraphs; i++) {
            DummyText += "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl id accumsan elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor, nisl eget consectetur elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor, nisl eget consectetur elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor, nisl eget consectetur elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor, nisl eget consectetur elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor, nisl eget consectetur elementum, nisl nisi porta nunc, euismod aliquet nunc nisl eget ipsum. Donec auctor."
        }

        return DummyText;
    }
}

// If you want to export your own classes to use in other files, make sure to add 'em in the export statement
export {
    BlindfoldsPresentation,
    BlindfoldsSlide,
    Utils
}
