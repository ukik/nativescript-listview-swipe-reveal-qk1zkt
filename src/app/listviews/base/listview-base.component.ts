import { Directive, inject, OnInit } from '@angular/core';
import { Dialogs, ObservableArray } from '@nativescript/core';
import {
  ListViewEventData,
  ListViewStaggeredLayout,
  RadListView,
} from 'nativescript-ui-listview';
import { Subject, takeUntil } from 'rxjs';
import { Item, ISwipeBtnTapTypes } from '../../models';
import { EventBusService, ItemService, SwipeCellService } from '../../services';

@Directive()
export class ListViewBaseComponent implements OnInit {
  swipeCellService = inject(SwipeCellService);
  eventBus = inject(EventBusService);
  itemService = inject(ItemService);
  items: ObservableArray<Item>;
  listView: RadListView;
  private _destroy$: Subject<any> = new Subject();

  ngOnInit(): void {
    this.items = new ObservableArray(this.itemService.getItems());
    this.eventBus
      .observe<ISwipeBtnTapTypes>(this.eventBus.types.listSwipeBtnTap)
      .pipe(takeUntil(this._destroy$))
      .subscribe((swipeType) => {
        Dialogs.alert({
          title: `Button tap for: '${swipeType}'`,
          message: '   ',
          okButtonText: 'Ok',
        });
      });
  }

  itemTap(args: ListViewEventData) {
    console.log('tapped on row index:', args.index);
  }

  loaded(args) {
    this.listView = args.object;
    const layout = new ListViewStaggeredLayout();
    layout.spanCount = 1;
    this.listView.listViewLayout = layout;
  }

  templateSelector = (item: any, index: number, items: any) => {
    if (item) {
      return 'mainRow';
    }
  };

  ngOnDestroy() {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
