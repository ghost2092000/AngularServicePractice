//Must have components 
import{ NgModule, Component, OnInit } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';

//This is the component 
import{EmailComponent} from './email.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';
import { EmailService } from '../services/email.service';


const routes: Routes = [
    {
        path: '',
        component: EmailComponent,  //
        data:
        {
            title: 'Sign UP'
        } 
    }
];

@NgModule({
    declarations: [EmailComponent],  //
    imports: [
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [EmailService]

})
export class EmailModule implements OnInit{

	constructor(private readonly emailService: EmailService)  { 
        // console.log("helloo");

        // console.log(this.emailService.counter);
    }

		ngOnInit( ) {

            console.log("helloo");


			console.log(this.emailService.counter);
		}







}  //