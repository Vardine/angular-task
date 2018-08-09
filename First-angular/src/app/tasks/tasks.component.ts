import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
selected_user: any;
showMassege :any;
  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.selected_user = JSON.parse(localStorage.getItem('tasks'));
  }

  ngOnInit() {
    if(Object.keys(this.selected_user).length == 0 ){

      this.showMassege = true;
      }
      else{
        this.showMassege = false;
      }
  }




}
