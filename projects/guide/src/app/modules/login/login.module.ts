import { NgModule } from "@angular/core";
import { JefiInputModule } from "projects/jefi-style/src/public-api";
import { JefiLoginModule } from "projects/jefi-style/src/public-api";
import { LoginComponent } from "./login.component";

@NgModule({
  imports: [
    JefiLoginModule,
    JefiInputModule,
  ],
  declarations: [
    LoginComponent
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule {}
