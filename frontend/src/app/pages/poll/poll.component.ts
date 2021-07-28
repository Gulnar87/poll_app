import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DataService } from "src/app/service.ts/data.service";

export class Answer {
  constructor(public answer: string, public voteCount: number) {}
}

export class PollData {
  constructor(
    public question: string,
    public answers: Answer[],
    public sum: number
  ) {}
}
@Component({
  selector: "app-poll",
  templateUrl: "./poll.component.html",
  styleUrls: ["./poll.component.css"],
})
export class PollComponent implements OnInit {
  public pollForm: FormGroup;

  @Input() poll: PollData;

  @Output() shareData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.initializeFormGroup();
  }

  initializeFormGroup(): void {
    this.pollForm = this.fb.group({
      question: [this.poll.question, Validators.maxLength(80)],
      answers: this.fb.array([
        ...this.poll.answers.map((el) =>
          this.fb.group({
            voteCount: el.voteCount,
            answer: [el.answer, [Validators.maxLength(80)]],
          })
        ),
      ]),
    });
  }

  updateQuestion() {
    this.poll.question = this.pollForm.get("question").value;

    this.data.changeMessage(this.poll);
  }

  preventDefault(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  updateAnswer() {
    this.poll.answers =  this.pollForm.get("answers").value;

    let sum: number = 0;

    this.poll.answers.map((el, i) => {
      sum += el.voteCount;
      this.poll.sum = sum;
      if (el.answer === "") {
        // el.voteCount = 0;
        this.getAnswersFormGroup(i).controls["voteCount"].setValue(0)
        this.poll.answers.splice(i, 1);
      }
    });
    this.data.changeMessage(this.poll);
  }

  get answersForms() {
    return this.pollForm.get("answers") as FormArray;
  }

  getAnswersFormGroup(index): FormGroup {
    return (this.pollForm.get("answers") as FormArray).controls[
      index
    ] as FormGroup;
  }

  createAnswer(): FormGroup {
    return this.fb.group({
      answer: ["", Validators.maxLength(80)],
      voteCount: 0,
    });
  }

  onAddAnswer(): void {
    (this.pollForm.get("answers") as FormArray).push(this.createAnswer());
  }

  onRemoveAnswer(index) {
    if ((this.pollForm.get("answers") as FormArray).length > 2) {
      (this.pollForm.get("answers") as FormArray).removeAt(index);

      this.updateAnswer();
    }

  }

  resetForm() {
    this.pollForm.reset();

    this.updateQuestion();
    this.updateAnswer();
  }
}
