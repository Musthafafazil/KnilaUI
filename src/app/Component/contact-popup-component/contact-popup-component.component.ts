import { Component, Inject, OnInit, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from 'src/app/Services/ContactService';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact-popup-component',
  templateUrl: './contact-popup-component.component.html',
  styleUrls: ['./contact-popup-component.component.css'],
  providers: [ContactService]
})
export class ContactPopupComponentComponent implements OnInit {
  private contactDataforEdit: any;
  public  InputData: any;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end'; 
  public verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private ref:MatDialogRef<ContactPopupComponentComponent>,private builder:FormBuilder,private contactServie:ContactService,
   @Inject(MAT_DIALOG_DATA) public data:any ,private _snackBar: MatSnackBar){}

  ngOnInit(): void {
    this.InputData = this.data;
    if(this.InputData.code > 0){
      this.setPopupData(this.InputData.code);
    }
  }


  public closePopup(){
    this.ref.close();
  }

  myForm = this.builder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required], 
    email: ['', [Validators.required, Validators.email]], 
    phoneNumber: ['', Validators.required], 
    address: ['', Validators.required], 
    city: ['', Validators.required], 
    state: ['', Validators.required], 
    country: ['', Validators.required], 
    postalCode: ['', Validators.required] ,
    isDeleted:false
  });

 public SaveContact(){

  if(this.InputData.code > 0){
     this.contactServie.UpdateContact(this.InputData.code,this.myForm.value).subscribe(res=>{
    this.closePopup();
    this._snackBar.open('Form Updated Successfully', 'Success', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 2000
    });
  })
  }else{
    if(this.myForm.valid){
      this.contactServie.SaveContact(this.myForm.value).subscribe(res=>{
        this.closePopup();
        this._snackBar.open('Form Saved Successfully', 'Success', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 2000
        });
      })
    }else{
      this._snackBar.open('Please Fill Required Fields', 'Invalid', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 2000
      });
    }


  }
  
 }

 public setPopupData(code:number){
  this.contactServie.getContactById(code).subscribe((res)=>{
    if(res){
      this.contactDataforEdit = res.data;
    }
    this.myForm.setValue({
      firstName: this.contactDataforEdit.firstName, lastName: this.contactDataforEdit.lastName,
      email: this.contactDataforEdit.email, phoneNumber: this.contactDataforEdit.phoneNumber,
      address: this.contactDataforEdit.address, state: this.contactDataforEdit.state, country: this.contactDataforEdit.country,
      postalCode: this.contactDataforEdit.postalCode,
      city: this.contactDataforEdit.city,
      isDeleted: false
    })
  });
 }

}
