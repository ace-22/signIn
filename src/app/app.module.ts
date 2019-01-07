import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ServiceService } from "./service.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { RouterModule, Routes } from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),

    RouterModule.forRoot([
      { path: "login", component: LoginComponent, pathMatch: "full" },
      { path: "signin", component: SignInComponent },
      { path: "", redirectTo: "signin", pathMatch: "full" },
      { path: "signup", component: SignUpComponent },
      { path: "login/:email", component: LoginComponent }
    ])
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
