import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
    title :string = "Kitchen";
    photos;
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getImages()
      .subscribe(data => { this.photos = data}
      );
  }

}
