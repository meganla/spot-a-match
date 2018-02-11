import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as $ from 'jquery';

@Component({
  selector: 'app-profile',
  templateUrl: './profile-entry.component.html',
  styleUrls: ['./profile-entry.component.css']
})
export class ProfileEntryComponent implements OnInit {
  @Output()
  getUserData: EventEmitter<any> = new EventEmitter<any>();
  user1 = '';
  user2 = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  getAuth() {
    return $.ajax(
      {
        method: 'GET',
        url: 'https://accounts.spotify.com/authorize',
        data: {
          client_id: '0067197c8931420ebf31c08c52d42a77',
          response_type: 'token',
          redirect_uri: 'http://localhost:4200'
        },
        success: function(result) {
          console.log('Result: ' + result);
        }
      }
    );
  }

  analyze() {
    this.getUserData.emit([this.user1, this.user2]);
  }
}
