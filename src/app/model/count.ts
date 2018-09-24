export interface ICount {
  Count: number;
}

export class DisplayCount implements ICount {
  Count = 0;
  MessageType: number;

  constructor(count: number, messageVal: number) {
    this.Count = count;
    this.MessageType = messageVal;
  }
}
