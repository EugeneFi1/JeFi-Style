import { NgModule } from "@angular/core";
import { JefiInputComponent } from "./input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        JefiInputComponent,
    ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    BrowserModule,
  ],
    exports: [
        JefiInputComponent,
    ]
})
export class JefiInputModule {
}
