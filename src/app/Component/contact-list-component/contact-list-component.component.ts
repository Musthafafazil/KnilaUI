import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortable, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ContactService } from 'src/app/Services/ContactService';
import { ContactPopupComponentComponent } from '../contact-popup-component/contact-popup-component.component';
import { ConfimationDialogueComponent } from '../confimation-dialogue/confimation-dialogue.component';

@Component({
  selector: 'app-contact-list-component',
  templateUrl: './contact-list-component.component.html',
  styleUrls: ['./contact-list-component.component.css'],
  providers: [ContactService]
})
export class ContactListComponentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator !: MatPaginator
  @ViewChild(MatSort) sort!: MatSort;
  public ContactData: any;
  public dataSource: any;
  public displayedColumns: string[] = ['FirstName', 'LastName', 'PhoneNumber', 'Email', 'Address', 'City', 'State', 'Country', 'PostalCode', 'Action'];

  constructor(private _contactService: ContactService, private _dialog: MatDialog) {
    this.loadContact();
  }

  public async ngOnInit() {


  }




  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }


  private async loadContact() {
    await this._contactService.getAllContacts().subscribe((data) => {
      if (data) {
        var data = data.data;
        this.ContactData = data.sort((a: any, b: any) => b.id - a.id)
        this.dataSource = new MatTableDataSource<any>(this.ContactData);
        this.dataSource.paginator = this.paginator
        this.dataSource.sort = this.sort;
      }
    })
  }

  private toCamelCase(input: string): string {
    return input.charAt(0).toLowerCase() + input.slice(1);
  }

  private customSort(property: string, desc: boolean): any {
    return function (a: any, b: any): number {
      const sortOrder = desc ? -1 : 1;

      // Case-insensitive string comparison
      const aLower = a[property].toLowerCase();
      const bLower = b[property].toLowerCase();

      if (aLower < bLower) {
        return -1 * sortOrder;
      } else if (aLower > bLower) {
        return 1 * sortOrder;
      } else {
        return 0;
      }
    };
  }


  public announceSortChange(sortState: Sort) {
    let property: string = this.toCamelCase(sortState.active);
    let sortedData;

    if (sortState.direction == 'desc') {
      sortedData = this.ContactData.sort((a: any, b: any) => {
        return b[property].localeCompare(a[property]);
      });
    } else {
      sortedData = this.ContactData.sort((a: any, b: any) => {
        return a[property].localeCompare(b[property]);
      });
    }

    this.dataSource = new MatTableDataSource<any>(this.ContactData);
  }

  public openPopUp(code: number, title: string) {
    var popup = this._dialog.open(ContactPopupComponentComponent, {
      width: '60%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        title: title,
        code: code
      }
    });
    popup.afterClosed().subscribe(res => {
      this.loadContact();
      this.dataSource = new MatTableDataSource<any>(this.ContactData);
    })
  }

  public editContact(id: number) {
    this.openPopUp(id, 'Edit Contact');
  }
  
  public addContact(id: number) {
    this.openPopUp(id, 'Add Contact');
  }
  

  public deleteContact(id:number){

    var popup = this._dialog.open(ConfimationDialogueComponent, {
      width: '30%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: id
      }
    });
    popup.afterClosed().subscribe(res => {
      this.loadContact();
      this.dataSource = new MatTableDataSource<any>(this.ContactData);
    })
    
  }

}
