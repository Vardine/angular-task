import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent implements OnInit {
  title :string = "Bathroom";
  photos;
  specificCategory: any;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.auth.getImages()
      .subscribe(data => { this.photos = data}
      );

  }




}
