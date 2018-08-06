import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {DialogModule} from 'primeng/dialog';
import {TabViewModule} from 'primeng/tabview';
import {ButtonModule} from 'primeng/button';

import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    TabViewModule,
    ButtonModule,
    ChartModule,
    CardModule
  ],
  exports: [
    DialogModule,
    TabViewModule,
    ButtonModule,
    ChartModule,
    CardModule
  ],
  declarations: []
})
export class SharedModule { }
