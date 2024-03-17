import { Component,OnInit} from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { TokenServie } from 'src/app/Services/TokenServie';
import { AppCommonEnum } from 'src/app/app-class';
@Component({
  selector: 'app-log-in-component',
  templateUrl: './log-in-component.component.html',
  styleUrls: ['./log-in-component.component.css'],
  providers: [TokenServie]
})
export class LogInComponentComponent implements OnInit {

  
  constructor(private _snackBar: MatSnackBar,private router:Router,private token:TokenServie) {}

  public userName:string = ''
  public userPassword:string = ''
  horizontalPosition: MatSnackBarHorizontalPosition = 'end'; 
  verticalPosition: MatSnackBarVerticalPosition = 'top'; 

  public ngOnInit(){

  }

  public async onLogInSubmit(event:any){
    if(this.userName && this.userPassword){
      if(this.userName == 'admin' && this.userPassword == 'admin@123'){
        await this.token.getToken().subscribe(data=>{
          if(data && data.data.tokenString){
            localStorage.setItem("APIToken",data.data.tokenString);
          }
         })
        this.router.navigate(['/Menu']);
      }
      else{
        this._snackBar.open('Invalid LogIn Credentials', 'Try Agian', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 1000
        });
        
    }
    }
  }

}
