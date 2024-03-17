import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponentComponent } from './Component/log-in-component/log-in-component.component';
import { FormBuilder, FormsModule ,FormControl,Validator,FormControlName} from '@angular/forms';
import { MaterialUiModule } from './materialUI.module';
import { HomeComponentComponent } from './Component/home-component/home-component.component';
import { MenuBarComponentComponent } from './Component/menu-bar-component/menu-bar-component.component';
import { ContactListComponentComponent } from './Component/contact-list-component/contact-list-component.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ContactPopupComponentComponent } from './Component/contact-popup-component/contact-popup-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfimationDialogueComponent } from './Component/confimation-dialogue/confimation-dialogue.component';
import { CommonInterceptor } from './Services/common.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponentComponent,
    HomeComponentComponent,
    MenuBarComponentComponent,
    ContactListComponentComponent,
    ContactPopupComponentComponent,
    ConfimationDialogueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CommonInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
