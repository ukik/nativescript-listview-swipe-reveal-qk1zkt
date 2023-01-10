import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from '@nativescript/angular';
import { NativeScriptUIListViewModule } from 'nativescript-ui-listview/angular';
import { TNSFontIconModule, USE_STORE } from 'nativescript-ngx-fonticon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ListViewAComponent } from './listviews/listview-a.component';
import { ListViewBComponent } from './listviews/listview-b.component';
import { ListViewCComponent } from './listviews/listview-c.component';
import { ListviewRowSwipeComponent } from './listviews/listview-row-swipe.component';
import { ionIcons } from './models';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    NativeScriptUIListViewModule,
    TNSFontIconModule.forRoot({}),
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ListViewAComponent,
    ListViewBComponent,
    ListViewCComponent,
    ListviewRowSwipeComponent,
  ],
  providers: [
    {
      provide: USE_STORE,
      useValue: {
        ion: ionIcons,
      },
    },
  ],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
