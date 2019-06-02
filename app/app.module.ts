import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AjaxReqComponent } from './ajax-req/ajax-req.component';
import { HttpModule } from '@angular/http';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NativePromiseComponent } from './native-promise/native-promise.component';
import { SingltonExampleComponent } from './singlton-example/singlton-example.component';
import { PromiseImplementComponent } from './promise-implement/promise-implement.component';

@NgModule({
  declarations: [
    AppComponent,
    AjaxReqComponent,
    ProfileDetailsComponent,
    NativePromiseComponent,
    SingltonExampleComponent,
    PromiseImplementComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
