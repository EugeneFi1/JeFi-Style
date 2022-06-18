import {NgModule} from "@angular/core";
import {JefiInputModule} from "projects/jefi-style/src/public-api";
import {InputComponent} from "./input.component";

@NgModule({
  imports: [
    JefiInputModule,
  ],
  declarations: [
    InputComponent,
  ],
  exports: [
    InputComponent,
  ]
})
export class InputModule {
}
