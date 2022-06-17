import { Component, Input } from "@angular/core";

@Component({
  selector: "jf-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.less"],
})
export class JefiInputComponent {
  @Input() inValid: boolean = false;
  @Input() placeholder: string = '';
  @Input() errorMessage: string | undefined;
}
