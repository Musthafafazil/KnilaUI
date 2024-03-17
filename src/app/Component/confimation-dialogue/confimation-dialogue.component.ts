import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ContactService } from 'src/app/Services/ContactService';

@Component({
  selector: 'app-confimation-dialogue',
  templateUrl: './confimation-dialogue.component.html',
  styleUrls: ['./confimation-dialogue.component.css'],
  providers: [ContactService]
})
export class ConfimationDialogueComponent {
private contactDataforEdit: any;
public horizontalPosition: MatSnackBarHorizontalPosition = 'end'; 
public verticalPosition: MatSnackBarVerticalPosition = 'top';
  InputData: any;

constructor(private contactServie:ContactService,private ref:MatDialogRef<ConfimationDialogueComponent>,private _snackBar: MatSnackBar,
  @Inject(MAT_DIALOG_DATA) public data:any ){}

ngOnInit(): void {
  this.InputData = this.data;
}

public updateContact(){
  if(this.InputData.code > 0){
    this.contactServie.getContactById(this.InputData.code).subscribe((res)=>{
      if(res){
        this.contactDataforEdit = res.data;
        this.contactDataforEdit.isDeleted = true;
      }
      this.contactServie.UpdateContact(this.InputData.code,this.contactDataforEdit).subscribe((res)=>{
        this.closePopup();
        this._snackBar.open('Data Deleted Successfully', 'Success', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000
        });
      })
    });
  }
}

public closePopup(){
  this.ref.close();
}
}
