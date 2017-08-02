import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { RouterModule }          from "@angular/router"

import { AppComponent }          from './app.component';
import { FormsModule }           from "@angular/forms";
import { HttpModule }            from "@angular/http";
import { AboutComponent }        from './about/about.component';
import { RegistrationComponent } from './registration/registration.component';

const ROUTES = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
