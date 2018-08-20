import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = "Contact Us";
  contactOptions = ['Address:','Armenia, 0051, Yerevan Nairi Zaryan St., 22/6 Building', 'Telephone:','+374 (98) 57 71 76', 'Email:', 'staff.iguan@gmail.com'];


  constructor() { }

  ngOnInit() {
  }

}
