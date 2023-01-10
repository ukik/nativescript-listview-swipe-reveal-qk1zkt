import { Injectable } from "@angular/core";
import { Subject, map, filter } from "rxjs";

interface EventBusArgs {
  type: string;
  data: any;
}

@Injectable({
  providedIn: "root",
})
export class EventBusService {
  types = {
    listSwipeBtnTap: "listSwipeBtnTap",
  };
  private _messages$ = new Subject<EventBusArgs>();

  emit(eventType: string, data?: any) {
    this._messages$.next({ type: eventType, data });
  }

  observe<T>(eventType: string) {
    return this._messages$.pipe(
      filter((args) => args.type === eventType),
      map((args) => <T>args.data)
    );
  }
}
