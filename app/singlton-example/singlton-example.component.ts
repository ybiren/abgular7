import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-singlton-example',
  templateUrl: './singlton-example.component.html',
  styleUrls: ['./singlton-example.component.css']
})
export class SingltonExampleComponent implements OnInit {

  singleton: any;
  f: any;


  constructor() { }

  ngOnInit() {
    //const l = this.f();
    //alert(l());
    //alert(l(1000));
    //alert(l());

    this.singleton = (function () {
      let instance;

      function createInstance() {
          let object = new Object("I am the instance");
          return object;
      }

      return {
          getInstance: function () {
              if (!instance) {
                  instance = createInstance();
              }
              return instance;
          }
      };
    })();

    this.f = (() => {
      let base;
      return function(param?) {
        if (param === undefined && base !== undefined) {
          base++;
        }
        if (param === undefined && base === undefined) {
          base = 4;
        }
        if (param !== undefined) {
          base = param;
        }
        return base;
     };
    })();

    alert(this.f());
    alert(this.f());
    alert(this.f(8));
    alert(this.f());
  }




setSingle(num: number) {
    this.singleton.getInstance().x  = num;
  }

  getSingle(num: number) {
    alert(this.singleton.getInstance().x);
  }


}
