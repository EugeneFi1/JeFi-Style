import {Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
  selector: "jf-input",
  templateUrl: "./input.component.html",
  styleUrls: ["./input.component.less"],
})
export class JefiInputComponent {
  @Input() public value: string | undefined;
  @Output() public valueChange = new EventEmitter<string>();
  @Input() public type: "text" | "password" = "text";

  @Input() public inValid: boolean = false;
  @Input() public placeholder: string = '';
  @Input() public errorMessage: string | undefined;

  public change(value: string) {
    this.valueChange.emit(value);
  }
}
