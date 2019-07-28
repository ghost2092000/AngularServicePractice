import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmailService } from './services/email.service';


const routes: Routes =[

  {
    path: '',
    pathMatch: 'full',
    loadChildren:() => import('./email/email.module').then(m =>m.EmailModule),
  },
  {
    path: 'login',
    loadChildren:() => import('./login/login.module').then(m =>m.LoginModule),
  },
  {
    path: 'dummy',
    loadChildren:() => import('./dummy/dummy.module').then(m =>m.DummyModule),
  },



]



@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),

  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
