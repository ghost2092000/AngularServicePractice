//Must have components 
import{ NgModule } from '@angular/core';
import{ RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

//This is the component 
import{LoginComponent} from './Login.component';

//Components that i might have to use for other services
import { ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
    {
        path: '',
        component: LoginComponent,  //
        data:
        {
            title: 'Sign UP'
        } 
    }
];

@NgModule({
    declarations: [LoginComponent],  //
    imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class LoginModule{}  //