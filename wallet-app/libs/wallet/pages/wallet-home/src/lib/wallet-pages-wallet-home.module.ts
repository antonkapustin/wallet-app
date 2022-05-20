import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletHomeComponent } from './wallet-home/wallet-home.component';
import { UiModule } from '@wallet-app/ui';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    RouterModule.forChild([{ path: '', component: WalletHomeComponent }]),
  ],
  declarations: [WalletHomeComponent],
})
export class WalletPagesWalletHomeModule {}
