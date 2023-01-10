import { Component, inject } from '@angular/core';
import { ISwipeBtnTapTypes } from '../models';
import { EventBusService, SwipeCellService } from '../services';

@Component({
  moduleId: module.id,
  selector: 'ns-listview-row-swipe',
  templateUrl: './listview-row-swipe.component.html',
})
export class ListviewRowSwipeComponent {
  swipeCellService = inject(SwipeCellService);
  eventBus = inject(EventBusService);

  tapAction(type: ISwipeBtnTapTypes) {
    this.eventBus.emit(this.eventBus.types.listSwipeBtnTap, type);
  }
}
