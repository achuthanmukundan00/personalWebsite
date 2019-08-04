import { Component, HostListener } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "AchuthanMukundan";


  // @HostListener('scroll', ['$event']) // for scroll events of the current element
  @HostListener("window:scroll", ["$event"]) // for window scroll events
  onScroll(event) {
    if ($(window).scrollTop() > 50) {
      $(".navbar")
        .css("background", "white")
        .css("padding-top", "1.5rem")
        .css("padding-bottom", "1.5rem");
      $(".navbar-brand").css("color", "black");
      $(".nav-link").css("color", "black");
      $(".link").css("filter", "invert(100%)");
    } else {
      $(".navbar")
        .css("background", "transparent")
        .css("padding-top", "4rem")
        .css("padding-bottom", "4rem");
      $(".navbar-brand").css("color", "white");
      $(".nav-link").css("color", "white");
      $(".link").css("filter", "invert(0%)");
    }
  }
}
