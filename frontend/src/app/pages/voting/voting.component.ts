import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/service.ts/data.service";
import { PollData } from "../poll/poll.component";

@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.css"],
})
export class VotingComponent implements OnInit {
  @Input() poll: PollData;
  // = {
  //   question: "What is the value of p?",
  //   answers: [{ answer: "1" }, { answer: "2" }, { answer: "3" }],
  // };

  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe((data) => {
      if (data) {
        this.poll.question = data.question;
        this.poll.answers = data.answers;
        console.log(data, "voting com");
      }
    });
  }
}