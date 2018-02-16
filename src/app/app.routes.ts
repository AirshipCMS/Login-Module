import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmAccountComponent } from './confirm-account';
import { SignInComponent } from './signin';
import { SignUpComponent } from './sign-up';
import { CanActivateViaAuthGuard } from './auth';

const AppRoutes : Routes = [
  { path: '', component: SignInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'confirm-account', component: ConfirmAccountComponent, canActivate: [CanActivateViaAuthGuard] }
];

export const appRoutingProviders : any[] = [];
export const routing : ModuleWithProviders = RouterModule.forRoot(AppRoutes);