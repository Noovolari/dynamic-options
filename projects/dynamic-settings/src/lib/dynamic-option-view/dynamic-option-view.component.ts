import {Component, Input} from '@angular/core';
import {DynamicSettings, IOption, OptionType} from "../models/dynamic-settings";
import {DynamicSettingsService} from "../dynamic-settings.service";

@Component({
  selector: 'lib-dynamic-option-view',
  templateUrl: './dynamic-option-view.component.html',
  styleUrls: ['./dynamic-option-view.component.css']
})
export class DynamicOptionViewComponent {
  @Input()
  dynamicSettings!: DynamicSettings;

  eOptionType = OptionType;

  constructor(private dynamicSettingsService: DynamicSettingsService){}

  save() {
    const newDynamicSettings: DynamicSettings = { menuVoices: [] };
    this.dynamicSettingsService.dynamicSettingsEvent.next(newDynamicSettings);
  }

  decomposeProperties(properties: { [optionKeyId: string] : IOption; }): any {
    let title: string = '';
    let subtitle: string = '';
    let iOption: IOption = {} as any;
    for (let key in properties) {
      title = key.split(".")[0];
      subtitle = key.split(".")[1];
      iOption = properties[key];
    }
    return {
      title,
      subtitle,
      iOption
    }
  }

  jsonize(object: any): string {
    return JSON.stringify(object);
  }
}
