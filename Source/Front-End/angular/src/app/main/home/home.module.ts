import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutes } from './home.routing';

import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';

const NZ_MODULE_SHARE = [
  NzTableModule,
  NzDividerModule
]

@NgModule({
  imports: [
    CommonModule,
    ...NZ_MODULE_SHARE,
    HomeRoutes
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
