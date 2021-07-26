import { Component, Input, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { DataService } from "src/app/service.ts/data.service";
import { PollData } from "../poll/poll.component";

@Component({
  selector: "app-chart",
  templateUrl: "./chart.component.html",
  styleUrls: ["./chart.component.css"],
})
export class ChartComponent implements OnInit {
  @Input() poll: PollData;

  subscription: Subscription;

  dataSource;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentMessage.subscribe((data) => {
      if (data) {
        this.poll.question = data.question;
        this.poll.answers = data.answers;
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
}
