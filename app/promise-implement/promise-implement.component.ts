import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise-implement',
  templateUrl: './promise-implement.component.html',
  styleUrls: ['./promise-implement.component.css']
})
export class PromiseImplementComponent implements OnInit {

  private myPromise: any;
  public inp = 'aaa';

  constructor() { }

  ngOnInit() {

    this.myPromise = function(action) {

       let thenCallBack: any;
       let catchCallBack: any;

       this.then =  function(func1,func2) {
         thenCallBack = func1;
         catchCallBack = func2;
       };



       const resolve = function() {
        console.log(typeof(thenCallBack));
        if (typeof(thenCallBack) === 'function') {
          thenCallBack();
        } else {
          setTimeout(() => {
            resolve();
          });
        }
      };

      const reject = function() {
        if (typeof(thenCallBack) === 'function') {
          catchCallBack();
        }  else {
          setTimeout(() => {
            reject();
          });
        }
      };

      action(resolve.bind(this), reject.bind(this))
    };

  }

  isGreaterThen5() {

    const x = 3;
    return new this.myPromise((resolve , reject) => {
      if (x > 5) {
        resolve();
      } else {
        reject();
      }
    });
  }

  doClick() {

    alert(this.inp);
    this.isGreaterThen5().then(() => {
      alert("greater");
    },
    () => {
      alert("smaller");
    });
  }


}
