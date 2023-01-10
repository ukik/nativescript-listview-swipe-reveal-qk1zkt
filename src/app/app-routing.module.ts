import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';

import { HomeComponent } from './home.component';
import { ListViewAComponent } from './listviews/listview-a.component';
import { ListViewBComponent } from './listviews/listview-b.component';
import { ListViewCComponent } from './listviews/listview-c.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listview-a', component: ListViewAComponent },
  { path: 'listview-b', component: ListViewBComponent },
  { path: 'listview-c', component: ListViewCComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
