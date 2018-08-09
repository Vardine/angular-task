import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { HeaderComponent } from '../header/header.component';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material';
import { AuthService } from '../auth.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  modalTitle: string;
  items: Observable<any[]>;
  newTask:any;
  taskList:any;
  selectedTask;
  selectedDuration;
  logged_users;
  logged_firstnames;
  taskLists:any;
  taskOptions = ['Create new app', 'Generate a component', 'Design a page', 'Registration form', 'Sidebar', 'User Interface'];
  public task:FormControl = new FormControl();
  durationOptions= ['less than 1 hour', 'less than 5 hour', 'less than 1 day', 'less than 2 days', 'less than 3 days', 'less than a week'];
  public duration:FormControl = new FormControl();
  constructor (@Inject(MAT_DIALOG_DATA) public data: any, private auth: AuthService, private matdialogref:MatDialogRef<ModalComponent>,public db: AngularFireDatabase ) {
    this.modalTitle = data.title;
    this.items = db.list('items').valueChanges();
    this.logged_users = JSON.parse(localStorage.getItem('email'));
    this.logged_firstnames = JSON.parse(localStorage.getItem('name'));
  }


  ngOnInit() {
    this.auth.getArray()
      .subscribe(data => this.taskList = data
      );
  }


  closeModal(){
    this.matdialogref.close();
  }


  getTask(selectedOptions){
    this.selectedTask = selectedOptions;
  }
  getDuration(selectedOptions1){
    this.selectedDuration = selectedOptions1;
  }

selectedProject(e){
    this.newTask = {
      "firstname":this.logged_firstnames,
      "user": this.logged_users,
      "task": this.selectedTask,
      "duration": this.selectedDuration
    }

  this.db.list('/').push(this.newTask);

  }


}
