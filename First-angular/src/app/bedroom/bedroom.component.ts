import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-bedroom',
  templateUrl: './bedroom.component.html',
  styleUrls: ['./bedroom.component.css']
})
export class BedroomComponent implements OnInit {
  title :string = "Bedroom";
  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.auth.getImages()
      .subscribe(data => { this.photos = data}
      );
  }

}
