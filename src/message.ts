import * as res from './result';

export class Message {
  data: {}
  text: string

  constructor(data:Object,text:string) {
    this.data = data;
    this.text = text;
  }

  serialize():string {
    return JSON.stringify({
      "data":this.data,
"text":this.text
    });
  }

  deserialize(content: string):res.Result<Message> {
    return res.Result.ok(JSON.parse(content));
  }
}
