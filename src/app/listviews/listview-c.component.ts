import { Component } from '@angular/core';
import { ListViewBaseComponent } from './base';

@Component({
  selector: 'ns-listview-c',
  templateUrl: './listview-c.component.html',
})
export class ListViewCComponent extends ListViewBaseComponent {
  swipeBtnTotal = 1;
}
