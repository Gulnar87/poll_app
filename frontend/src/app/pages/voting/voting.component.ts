import { Component, Input, OnChanges, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PollData } from "src/app/objects/poll.object";
import { DataService } from "src/app/service.ts/data.service";


@Component({
  selector: "app-voting",
  templateUrl: "./voting.component.html",
  styleUrls: ["./voting.component.css"],
})
export class VotingComponent implements OnInit, OnDestroy {
  @Input() poll: PollData;
  vote;
  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe((data) => {
      if (data) {
        this.poll = data;
      }
    });
  }

  voteForAnswer(vote) {
    vote.voteCount += 1;
    this.poll.sum += 1;
    this.data.changeMessage(this.poll);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
