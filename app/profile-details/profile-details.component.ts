import { Component, OnInit, Input } from '@angular/core';
import {IProfileDetails} from '../interfacess';


@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.css']
})
export class ProfileDetailsComponent implements OnInit {

  @Input() profileDetails: IProfileDetails;

  constructor() { }

  ngOnInit() {
  }

}
