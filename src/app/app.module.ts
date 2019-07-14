import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { FirstnameComponent } from './firstname/firstname.component';
import { LastnameComponent } from './lastname/lastname.component';
import { EmailComponent } from './email/email.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstnameComponent,
    LastnameComponent,
    EmailComponent,
    ReviewComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: '', component: FirstnameComponent },
      { path: 'lastname', component: LastnameComponent },
      { path: 'email', component: EmailComponent },
      { path: 'review', component: ReviewComponent },
      { path: 'confirmation', component: ConfirmationComponent } 
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
