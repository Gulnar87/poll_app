import { Component, OnInit } from "@angular/core";
import { PollData } from "../objects/poll.object";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"],
})
export class PagesComponent implements OnInit {

  public poll: PollData = new PollData(
    "What is the value \u03C0 ?",
    [
      { answer: "3.14", voteCount: 4 },
      { answer: "3.1416", voteCount: 3 },
      { answer: "3.14159264", voteCount: 4 },
    ],
    11
  );

  constructor() {}

  ngOnInit() {}
}
