import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AppComponent } from './app.component';
import { ViewsComponent } from './views/views.component';
import { MachinesComponent } from './machines/machines.component';
import { SettingsComponent } from './settings/settings.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [

  {path: 'user', component: UserComponent},
  {path: 'views', component: ViewsComponent},
  {path: 'machines', component: MachinesComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '', component: MenuComponent}
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
