import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { AuthService } from '../auth.service';
import { Pipe, PipeTransform } from '@angular/core';
import 'rxjs/add/operator/filter';

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
    this.auth.getBathroom()
      .subscribe(data => { this.photos = data}
      );
      this.auth.changeText1();
  }

}
