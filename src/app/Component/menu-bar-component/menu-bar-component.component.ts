import { Component } from '@angular/core';
import { ContactService } from 'src/app/Services/ContactService';

@Component({
  selector: 'app-menu-bar-component',
  templateUrl: './menu-bar-component.component.html',
  styleUrls: ['./menu-bar-component.component.css'],
  providers: [ContactService]
})
export class MenuBarComponentComponent {
  ContactData: any;

  constructor(private _contactService: ContactService) {}


  public async ngOnInit() {
    // await this._contactService.getAllContacts().subscribe((data)=>{
    //   if(data){
    //     this.ContactData = data.data;
    //   }
    // })
  }
}
