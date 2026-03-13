import { CommonModule, NgComponentOutlet } from '@angular/common';
import { Component, Input, Type } from '@angular/core';

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

@Component({
  standalone: true,
  template: `<h1 class="mb-0">{{ text }}</h1>`,
})
class HeadingH1Component {
  @Input() text = '';
}

@Component({
  standalone: true,
  template: `<h2 class="mb-0">{{ text }}</h2>`,
})
class HeadingH2Component {
  @Input() text = '';
}

@Component({
  standalone: true,
  template: `<h3 class="mb-0">{{ text }}</h3>`,
})
class HeadingH3Component {
  @Input() text = '';
}

@Component({
  standalone: true,
  template: `<h4 class="mb-0">{{ text }}</h4>`,
})
class HeadingH4Component {
  @Input() text = '';
}

@Component({
  standalone: true,
  template: `<h5 class="mb-0">{{ text }}</h5>`,
})
class HeadingH5Component {
  @Input() text = '';
}

@Component({
  standalone: true,
  template: `<h6 class="mb-0">{{ text }}</h6>`,
})
class HeadingH6Component {
  @Input() text = '';
}

const HEADING_COMPONENTS: Record<HeadingTag, Type<unknown>> = {
  h1: HeadingH1Component,
  h2: HeadingH2Component,
  h3: HeadingH3Component,
  h4: HeadingH4Component,
  h5: HeadingH5Component,
  h6: HeadingH6Component,
};

@Component({
  selector: 'app-heading',
  standalone: true,
  imports: [CommonModule, NgComponentOutlet],
  template: `
    <ng-container
      *ngComponentOutlet="resolvedComponent; inputs: { text: text }"
    ></ng-container>
  `,
})
export class HeadingComponent {
  @Input() text = 'Ueberschrift';
  @Input() tag: HeadingTag = 'h2';

  get resolvedComponent(): Type<unknown> {
    return HEADING_COMPONENTS[this.tag];
  }
}
