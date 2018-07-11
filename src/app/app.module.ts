import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

// Ours module
import {AuthModule} from "./auth/auth.module";
import {AppRoutingModule} from "./app-routing.module.";
import {AuthRoutingModule} from "./auth/auth-routing.module";
import {SharedModule} from "./shared/shared.module";
import {SystemModule} from "./system/system.module";

// Components
import {AppComponent} from './app.component';

// Services
import {UsersService} from "./shared/services/users.service";
import {AuthService} from "./shared/services/auth.service";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AuthModule,
    AppRoutingModule,
    AuthRoutingModule,
    HttpClientModule,
    SystemModule
  ],
  providers: [
    UsersService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
