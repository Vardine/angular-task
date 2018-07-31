import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.css']
})
export class OfficeComponent implements OnInit {
    title :string = "Office";
    photos;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getImages()
      .subscribe(data => { this.photos = data}
      );
  }
  }
