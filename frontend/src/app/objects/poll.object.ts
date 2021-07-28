import { Answer } from "./answer.object";

export class PollData {
    constructor(
      public question?: string,
      public answers?: Answer[],
      public sum?: number
    ) {}
  }