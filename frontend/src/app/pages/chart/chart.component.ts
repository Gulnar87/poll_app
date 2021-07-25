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
        console.log(data, "voting com");
      }

      this.initializeVottingGraph();
    });
  }

  initializeVottingGraph() {
    const chartData = [];
    this.poll.answers.forEach((el) => {
      chartData.push({ label: el.answer, value: 100 });
      return chartData;
    });

    this.dataSource = {
      chart: {
        caption: this.poll.question,
        captionFontColor: "#1f448a",
        // yAxisName: "",
        // xAxisName: "",
        paletteColors: "31BAD5",
        theme: "fusion",
      },

      data: chartData,
    };
  }
}
