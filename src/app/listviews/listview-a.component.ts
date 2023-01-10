import { Component } from '@angular/core';
import { ListViewBaseComponent } from './base';

@Component({
  selector: 'ns-listview-a',
  templateUrl: './listview-a.component.html',
})
export class ListViewAComponent extends ListViewBaseComponent {
  swipeBtnTotal = 3;
}
