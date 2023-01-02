import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailStatusComponent } from './components/email-status/email-status.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'emailStatus', component: EmailStatusComponent },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
