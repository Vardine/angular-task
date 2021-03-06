import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  logged_users;
  userData;
  z = [];
  items: Observable<any[]>;
  constructor(private auth: AuthService, public db: AngularFireDatabase) {
    this.logged_users = JSON.parse(localStorage.getItem('email'));
    this.items = db.list('items').valueChanges(); }

    ngOnInit() {
      this.auth.getArray()
        .subscribe(data => this.userData = data
        );
    }

      showTasks(){
        this.auth.getArray()
          .subscribe(data => this.userData = data
          );
      Object.entries(this.userData).forEach(
      ([key, val]) => {
      if(val["user"] == this.logged_users ) {

      this.z.push(val);

      this.auth.job_element= this.z;


      }
      else{
        this.z = [];
        this.auth.job_element= this.z;
      }

    });
  }
}
