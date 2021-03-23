/**
 * @license
 * Copyright a-Qoot All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/a-Qoot/qoot/blob/main/LICENSE
 */

import { ItemService } from 'integration/todo/data/Item/public.js';
import { AsyncProvider } from 'qoot';
import {
  injectEventHandler,
  markDirty,
  provideEventProp,
  provideQrlExp,
  provideService,
} from '../../qoot.js';
import { ItemComponent } from './component.js';

export const begin = injectEventHandler(
  ItemComponent, //
  async function (this: ItemComponent) {
    this.editing = true;
    markDirty(this);
  }
);

export const change = injectEventHandler(
  ItemComponent, //
  provideQrlExp<string>('value'),
  provideQrlExp<string>('code'),
  provideService<ItemService>(provideEventProp('itemKey') as AsyncProvider<string>), // TODO fix cast
  async function (
    this: ItemComponent,
    inputValue: string,
    charCode: string,
    itemService: ItemService
  ) {
    if (charCode === 'Enter') {
      console.log('ENTER', inputValue);
      itemService.$state.title = inputValue;
      markDirty(itemService);
      this.editing = false;
      markDirty(this);
    } else if (charCode === 'Escape') {
      this.editing = false;
      markDirty(this);
    }
  }
);

export const end = injectEventHandler(
  ItemComponent, //
  async function (this: ItemComponent) {
    this.editing = false;
    markDirty(this);
  }
);