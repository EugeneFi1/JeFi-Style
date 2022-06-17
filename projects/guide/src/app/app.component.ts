import { Component } from '@angular/core';

// @ts-ignore
import libraryPackage from '../../../jefi-style/package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'guide';

  ver = libraryPackage.version;
}
