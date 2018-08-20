import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFireDatabase, AngularFireList   } from 'angularfire2/database';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
selected_user: any;
showMassege :any;
itemRef: AngularFireList <any>;
  items: Observable<any>;
userData;
  constructor(private auth: AuthService, public db: AngularFireDatabase, public dialog: MatDialog) {
    this.selected_user = this.auth.job_element;
    this.items = db.list('items').valueChanges();

  }

  ngOnInit() {
  this.auth.getArray()
  .subscribe(data => this.userData = data
  );


this.auth.changeText1();

    if (Object.keys(this.selected_user).length == 0 ){

      this.showMassege = true;
      }
      else{
        this.showMassege = false;
      }
  }

  deleteRow(user) {
    Object.entries(this.userData).forEach(
    ([key, val]) => {
    if(user['task'] == val['task'] && user['duration'] == val['duration']) {
    this.db.list('/').remove(key);

  }
  this.auth.getArray()
    .subscribe(data => this.userData = data
    );
}
);
 }


 editItem(user){
this.auth.showUpdateButton();
this.auth.noTaskButton();
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;
  dialogConfig.data = {
  title: 'Add a Task'
  };
  const dialogRef = this.dialog.open(ModalComponent, dialogConfig);
  /*dialogRef.afterClosed().subscribe(result => {
  this.router.navigate(['/tasks']);
  });*/
  this.auth.task_row=user;
 }
}
