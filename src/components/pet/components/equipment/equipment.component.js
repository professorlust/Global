
import _ from 'lodash';

import { Component } from '@angular/core';
import template from './equipment.html';

import { ItemComponent } from '../../../_shared/item/item.component';

@Component({
  selector: 'equipment',
  directives: [ItemComponent],
  inputs: ['player'],
  template
})
export class EquipmentComponent {
  ngOnInit() {
    this.items = _.sortBy(this.player, 'type');
  }
}