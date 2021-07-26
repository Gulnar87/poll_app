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
  // public voteCount?: number = 0;
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

  public answers: Answer[];

  @Input() poll: PollData;

  @Output() shareData: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private data: DataService) {}

  ngOnInit() {
    this.initializeFormGroup();

    // this.pollForm.controls["question"].disable();
    // this.pollForm.controls["question"].hasError("maxlength");
  }

  initializeFormGroup(): void {
    this.pollForm = this.fb.group({
      question: [this.poll.question, Validators.maxLength(80)],
      answers: this.fb.array(
        // this.poll.answers && this.poll.answers.length > 0
        // ?
        [
          ...this.poll.answers.map((el) =>
            this.fb.group({
              voteCount: el.voteCount,
              answer: [
                el.answer,
                Validators.compose([Validators.maxLength(80)]),
              ],
            })
          ),
        ]
        // : [
        //     ...[new Answer(undefined, 0)].map((el) =>
        //       this.fb.group({
        //         voteCount: el.voteCount,
        //         answer: [el.answer, Validators.maxLength(80)],
        //       })
        //     ),
        //   ]
      ),
    });

    // if (this.pollForm.controls["question"].hasError("maxlength")) {
    //   this.pollForm.controls["question"].disable();
    // this.pollForm.get('endDate').disable();
    // }
  }

  updateQuestion() {
    this.poll.question = this.pollForm.get("question").value;

    this.data.changeMessage(this.poll);
  }

  updateAnswer() {
    this.poll.answers = this.pollForm.get("answers").value;

    this.poll.answers.map((el) => {
      if (el.answer === "") {
        el.voteCount = null;
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
    this.pollForm.reset({
      question: "What is the value \u03C0 ?",
      answers: [
        { answer: "3.14", voteCount: 4 },
        { answer: "3.1416", voteCount: 3 },
        { answer: "3.14159264", voteCount: 4 },
      ],
      sum: 11,
    });

    this.updateQuestion();
    this.updateAnswer();
  }
}
