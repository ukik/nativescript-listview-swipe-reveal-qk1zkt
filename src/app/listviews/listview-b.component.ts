import { Component } from '@angular/core';
import { ListViewBaseComponent } from './base';

@Component({
  selector: 'ns-listview-b',
  templateUrl: './listview-b.component.html',
})
export class ListViewBComponent
  extends ListViewBaseComponent
{
  swipeBtnTotal = 2;
}
