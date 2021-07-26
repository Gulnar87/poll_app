import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { PollData } from "../pages/poll/poll.component";

@Injectable()
export class DataService {
  private messageSource = new BehaviorSubject<PollData>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() {}

  changeMessage(data: PollData) {
    this.messageSource.next(data);
  }
}