//Must have components 
import{ NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is the component 
import{DummyComponent} from './dummy.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';
import { EmailService } from '../services/email.service';


const routes: Routes = [
    {
        path: '',
        component: DummyComponent,  //
        data:
        {
            title: 'Sign UP'
        } 
    }
];

@NgModule({
    declarations: [DummyComponent],  //
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [EmailService]
})

export class DummyModule{


    constructor() { }

    ngOnInit( ) {
    }






}  //