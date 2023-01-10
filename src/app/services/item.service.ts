import { Injectable } from '@angular/core';

import { Item } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private items = new Array<Item>(
    {
      id: 1,
      name: 'Mickey Mouse',
    },
    {
      id: 2,
      name: 'Minnie Mouse',
    },
    {
      id: 3,
      name: 'Donald Duck',
    },
    {
      id: 4,
      name: 'Daisy Duck',
    },
    {
      id: 5,
      name: 'Huey Duck',
    },
    {
      id: 6,
      name: 'Dewey Duck',
    },
    {
      id: 7,
      name: 'Louie Duck',
    },
    {
      id: 8,
      name: 'Scrooge McDuck',
    },
    {
      id: 9,
      name: 'Goofy',
    },
    {
      id: 10,
      name: 'Pluto',
    },
    {
      id: 11,
      name: 'Oswald the Lucky Rabbit',
    },
    {
      id: 12,
      name: 'Ortensia',
    },
    {
      id: 13,
      name: 'Clarice',
    },
    {
      id: 14,
      name: 'Pete',
    },
    {
      id: 15,
      name: 'Clarabelle Cow',
    },
    {
      id: 16,
      name: 'Max Goof',
    },
    {
      id: 17,
      name: 'Horace Horsecollar',
    },
    {
      id: 18,
      name: 'Clara Cluck',
    },
    {
      id: 19,
      name: 'Mortimer Mouse',
    },
    {
      id: 20,
      name: 'Humphrey the bear',
    }
  );

  getItems(): Array<Item> {
    return this.items;
  }

  getItem(id: number): Item {
    return this.items.filter((item) => item.id === id)[0];
  }
}
