import { Routes } from '@angular/router';

export const SRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import(
        '../../../../libs/wallet/pages/wallet-home/src/lib/wallet-pages-wallet-home.module'
      ).then((m) => m.WalletPagesWalletHomeModule),
  },
];
