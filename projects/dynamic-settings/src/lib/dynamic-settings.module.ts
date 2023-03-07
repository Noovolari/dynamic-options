import { NgModule } from '@angular/core';
import { DynamicOptionViewComponent } from './dynamic-option-view/dynamic-option-view.component';
import {CommonModule} from "@angular/common";
import { HumanCasePipe } from './dynamic-option-view/human-case.pipe';

@NgModule({
  declarations: [
    DynamicOptionViewComponent,
    HumanCasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicOptionViewComponent
  ]
})
export class DynamicSettingsModule { }
