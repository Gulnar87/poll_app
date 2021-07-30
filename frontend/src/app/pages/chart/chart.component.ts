import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { PollData } from "src/app/objects/poll.object";
import { DataService } from "src/app/service.ts/data.service";


@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit, OnDestroy {
  @Input() poll: PollData;
  subscription: Subscription;
  dataSource;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe((data) => {
      if (data) {
      this.poll = data;
      }
      this.initializeVottingGraph();
    });
  }

  initializeVottingGraph() {
    const chartData = [];
    this.poll.answers.forEach((el) => {
      chartData.push({ label: el.answer, value: el.voteCount });
      return chartData;
    });

    this.dataSource = {
      chart: {
        caption: this.poll.question,
        captionFontColor: "#1f448a",
        paletteColors: "3f51b5",
        showYAxisValues: "0",
        theme: "gammel",
      },
      data: chartData,
    };
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
