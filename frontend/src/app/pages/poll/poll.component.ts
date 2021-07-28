import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Answer } from "src/app/objects/answer.object";
import { PollData } from "src/app/objects/poll.object";
import { DataService } from "src/app/service.ts/data.service";

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
      answers: this.fb.array(

        this.poll.answers && this.poll.answers.length > 0 ?
        [
        ...this.poll.answers.map((el) =>
          this.fb.group({
            voteCount: el.voteCount,
            answer: [el.answer, [Validators.maxLength(80)]],
          })
        ),
      ] :  [...([new Answer(undefined, null)]).map(el => this.fb.group({
             votecount: el.voteCount,
             answer: [el.answer, Validators.maxLength(80)],
          }))]
      
      ),
    });
  }

  preventDefault(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
    }
  }

  updatePoll() {

    const poll = new PollData();
    poll.sum = 0
    poll.question = this.pollForm.get('question').value;

    poll.answers = this.pollForm.controls['answers'].value.map((el, i)=> {
      if(!el.answer || el.answeer === ""){
 
      ((this.pollForm.get("answers") as FormArray).controls[i] as FormGroup).controls["voteCount"].setValue(0)
       poll.sum -= el.voteCount;
      }
      
      poll.sum += el.voteCount;

       return el ;
    })
    .filter((el) => el.answer)

    this.poll.answers.length = poll.answers.length;
    this.data.changeMessage(poll);
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
      this.updatePoll();
    }
  }

  resetForm() {
    this.pollForm.reset();
    this.updatePoll();  
  }
}
