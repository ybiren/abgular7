import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import {IProfileRef, IProfileDetails} from '../interfacess';


@Component({
  selector: 'app-ajax-req',
  templateUrl: './ajax-req.component.html',
  styleUrls: ['./ajax-req.component.css']
})
export class AjaxReqComponent implements OnInit {

  private profileRefArr: IProfileRef[];
  public profileDetails: IProfileDetails;

  constructor(private http: Http) { }

  ngOnInit() {
    this.doRequest();
  }

  //http://duda-api-test.herokuapp.com/profile/

  //https://graph.facebook.com/facebook_user_id/picture?type=square


  doRequest() {
    this.http.get('http://duda-api-test.herokuapp.com/profiles').subscribe((res) => {
      this.profileRefArr = <IProfileRef[]>res.json();
    });
  }

  personChanged(selPersonId: string) {
    this.http.get(`http://duda-api-test.herokuapp.com/profile/${selPersonId}`).subscribe((res) => {
      this.profileDetails = <IProfileDetails>res.json();
    });
  }

}
