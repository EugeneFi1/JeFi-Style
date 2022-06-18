import { NgModule } from "@angular/core";
import { JefiLoginModule } from "projects/jefi-style/src/public-api";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    JefiLoginModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {}
