import { Component } from '@angular/core';
import { MeldeformularComponent } from './component/meldeformular.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MeldeformularComponent],
  template: `
    <app-meldeformular></app-meldeformular>
  `,
  styles: [],
})
export class App {}
