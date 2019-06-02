import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-native-promise',
  templateUrl: './native-promise.component.html',
  styleUrls: ['./native-promise.component.css']
})
export class NativePromiseComponent implements OnInit {

  public num: number;
  public oddOrEven: string;

  constructor() { }

  ngOnInit() {

    this.num = this.getRandomInt(1000);
    this.isEven(this.num).then(() => {
      this.oddOrEven = 'even';
    }, () => {this.oddOrEven = 'odd';
    });
  }

  private getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }


  private isEven(num: number): Promise<void> {

    return new Promise((resolve1, reject) => {
      if (num % 2 === 0) {
        resolve1();
      } else {
        reject();
      }
    });


  }


}
