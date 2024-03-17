import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponentComponent } from './Component/log-in-component/log-in-component.component';
import { MenuBarComponentComponent } from './Component/menu-bar-component/menu-bar-component.component';
import { HomeComponentComponent } from './Component/home-component/home-component.component';
import { ContactListComponentComponent } from './Component/contact-list-component/contact-list-component.component';


const routes: Routes = [
  {
    path: 'Menu',
    component: MenuBarComponentComponent,
    children: [
        { path: 'Home', component: HomeComponentComponent },
        { path: 'ContactList', component: ContactListComponentComponent },
        { path: '', redirectTo: 'ContactList', pathMatch: 'full' }, // Redirect to ContactList by default
        // Add other routes as needed
    ]
  },
  { path: '', component: LogInComponentComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
