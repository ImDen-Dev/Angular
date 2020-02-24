import { Component } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent {
  title = 'angular-start';
  num = 42;
  arr = [1, 2, 3];
  obj = { a: 1, b: 2, c: { d: 3 } };
  img =
    'https://kometa.red/wp-content/uploads/2017/05/gryaznaya-sobaka_01.jpeg';
  inputValue = '';

  constructor() {
    // setTimeout(() => {
    //   console.log('Timeout is over');
    //   this.img =
    //     'https://dogtime.com/assets/uploads/2012/05/file_11910_max_300_dog-with-the-biggest-eyes.jpg';
    // }, 5000);
  }

  onInput(event: KeyboardEvent) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }

  onClick() {
    console.log('Click');
  }

  onBlur(value: string) {
    this.inputValue = value;
  }
}
