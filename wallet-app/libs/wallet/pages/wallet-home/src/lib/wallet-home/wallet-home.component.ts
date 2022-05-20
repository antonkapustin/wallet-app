import { ViewEncapsulation } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: '[wallet-app-wallet-home].page',
  templateUrl: './wallet-home.component.html',
  styleUrls: ['./wallet-home.component.less'],
  encapsulation: ViewEncapsulation.None,
})
export class WalletHomeComponent {}
