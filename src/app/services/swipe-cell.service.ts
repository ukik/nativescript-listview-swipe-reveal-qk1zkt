import { Injectable } from '@angular/core';
import { Utils } from '@nativescript/core';
import { Subject } from 'rxjs';
import { SwipeActionsEventData } from 'nativescript-ui-listview';

@Injectable({
  providedIn: 'root',
})
export class SwipeCellService {
  swipeActive = false;
  // Reactive notification listeners on which item was swiped
  swipeItemIndexSet: Subject<number> = new Subject();
  totalButtonOverride = 0;
  btnWidth = 75;
  private _displayDensity: number;
  private _swipeItemIndex = -1;

  constructor() {
    this._displayDensity = Utils.layout.getDisplayDensity();
  }

  get swipeItemIndex() {
    return this._swipeItemIndex;
  }

  set swipeItemIndex(value: number) {
    this._swipeItemIndex = value;
    this.swipeItemIndexSet.next(value);
  }

  onSwipeCellStarted(args: SwipeActionsEventData, totalButtons = 3) {
    // reset overrides right when started
    this.totalButtonOverride = 0;
    this.swipeActive = true;
    const density = this._displayDensity;
    let threshold = Math.floor(density * 50);
    if (args) {
      if (typeof args.index === 'number' && args.index > -1) {
        this.swipeItemIndex = args.index;
      }
      if (this.totalButtonOverride) {
        // conditional total button override
        totalButtons = this.totalButtonOverride;
      }
      let right = Math.round(density * (this.btnWidth * totalButtons));
      if (this._swipeItemIndex === -1) {
        // no valid item index
        // disable swipe
        right = threshold = 0;
      }
      if (threshold) {
        const swipeLimits = args.data.swipeLimits;
        swipeLimits.top = 0;
        swipeLimits.bottom = 0;
        swipeLimits.left = 0;
        swipeLimits.right = right;
        swipeLimits.threshold = threshold;
      }
    }
  }

  onSwipeCellChanged(args: SwipeActionsEventData) {
    if (args.data.x === 0) {
      // reset
      this.swipeActive = false;
      this.totalButtonOverride = 0;
      this._swipeItemIndex = -1;
    }
  }

  onSwipeCellFinished(args: SwipeActionsEventData) {
    if (args && typeof args.index === 'number' && args.index > -1) {
      this._swipeItemIndex = args.index;
    }
  }
}
