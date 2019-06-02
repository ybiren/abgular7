import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app/app.component';
import { NativePromiseComponent } from '../../app/native-promise/native-promise.component';
import { AjaxReqComponent } from '../../app/ajax-req/ajax-req.component';
import { SingltonExampleComponent } from '../../app/singlton-example/singlton-example.component';
import { PromiseImplementComponent } from '../../app/promise-implement/promise-implement.component';


    const routes: Routes = [
      {
        path: 'ajax/req',
        component: AjaxReqComponent,
      },
      {
        path: 'native/promise',
        component: NativePromiseComponent,
      },
      {
        path: 'singleton/example',
        component: SingltonExampleComponent,
      },
      {
        path: 'promise/implement',
        component: PromiseImplementComponent,
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full' ,
      },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
