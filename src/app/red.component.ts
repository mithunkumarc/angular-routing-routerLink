import { Component, Input } from '@angular/core';

@Component({
  selector: 'red',
  template: `<h1>this is red component {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class RedComponent  {
  //@Input() name: string;
}
