import { Component, OnInit,Inject } from '@angular/core';
import { SignComponent } from '../sign/sign.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material';
import { ModalComponent } from '../modal/modal.component';
import{ Router } from '@angular/router';
import {LocationStrategy} from '@angular/common';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  addButton:boolean;
  constructor(public dialog: MatDialog, private router: Router, public url:LocationStrategy, private auth: AuthService) {
    }

  ngOnInit() {
    if(this.url.path()==='/' || this.url.path()==='/registration' || this.url.path()==='/about' ||  this.url.path()==='/contact'   ){

      this.addButton = false;
      }
      else{
        this.addButton = true;
      }

  }


  openModal() {
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
this.auth.noUpdateButton();
this.auth.showTaskButton();
 }

}
