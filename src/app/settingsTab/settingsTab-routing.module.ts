import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsTabPage } from './settingsTab.page';

const routes: Routes = [
  {
    path: '',
    component: SettingsTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsTabPageRoutingModule {}