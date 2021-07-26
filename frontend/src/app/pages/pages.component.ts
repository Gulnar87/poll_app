import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "../service.ts/data.service";
import { PollData } from "./poll/poll.component";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.css"],
})
export class PagesComponent implements OnInit {
  subscription: Subscription;

  public poll: PollData = new PollData(
    "What is the value \u03C0 ?",
    [
      { answer: "3.14", voteCount: 4 },
      { answer: "3.1416", voteCount: 3 },
      { answer: "3.14159264", voteCount: 4 },
    ],
    11
  );

  constructor(private data: DataService) {}

  ngOnInit() {}
}
