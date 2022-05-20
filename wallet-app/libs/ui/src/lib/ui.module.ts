import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiUiHeaderModule } from '@wallet-app/ui/ui-header';

@NgModule({
  imports: [CommonModule],
  exports: [UiUiHeaderModule],
})
export class UiModule {}
