import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {AuthRoutingModule} from "./auth-routing.module";
import {SharedModule} from "../shared/shared.module";

import {LoginComponent} from './login/login.component';
import {RegComponent} from './reg/reg.component';
import {AuthComponent} from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {
}
