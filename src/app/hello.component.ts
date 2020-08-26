import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h2>Component 1!</h2>`,
  styles: [`h2 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
@Component({
  selector: 'hi',
  template: `<h2>Component 2!</h2>`,
  styles: [`h2 { font-family: Lato; }`]
})
export class HiComponent  {
  @Input() name: string;
}
