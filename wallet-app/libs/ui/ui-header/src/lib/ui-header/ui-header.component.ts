import { Component, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '.s-ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class UiHeaderComponent {
  @HostBinding() class = 'header';
}
