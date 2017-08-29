import { NgModule } from "@angular/core";

import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { SignUpComponent } from "./sign-up/sign-up.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import {AuthGuardService} from "./auth-guard.service";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            { path: 'register' , component:  SignUpComponent, canActivate: [AuthGuardService]},
            { path: 'login' , component:  SignInComponent}

        ])
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AuthRoutingModule { }