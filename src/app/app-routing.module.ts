import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { SmartTblComponent } from './components/smart-tbl/smart-tbl.component';

const routes: Routes = [
	{ path: '', redirectTo: 'tutorials', pathMatch: 'full' },
	{ path: 'tutorials', component: TutorialsListComponent },
	{ path: 'tutorials/:id', component: TutorialDetailsComponent },
	{ path: 'add', component: AddTutorialComponent },
	{ path: 'smart', component: SmartTblComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
