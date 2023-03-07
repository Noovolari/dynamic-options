import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {DynamicSettings, IMenuMainVoice, IOption, OptionType} from "./models/dynamic-settings";

@Injectable({
  providedIn: 'root'
})
export class DynamicSettingsService {

 private _settingsFile?: { [settingsKeyId: string] : any; };
 dynamicSettingsEvent: BehaviorSubject<DynamicSettings> = new BehaviorSubject<DynamicSettings>({} as any);

  constructor() { }

  init(settingsFile: string): void {

    try {
      this._settingsFile = JSON.parse(settingsFile);
    } catch(error) {
      throw new Error("Please pass a valid JSON file");
    }
  }

  parseOptions(): DynamicSettings {
    const menuVoices: IMenuMainVoice[] = [];
    for (let key in this._settingsFile) {
      const value = this._settingsFile[key];
      const settingStringJSONId = key.split(".")[0];
      const settingStringJSONKey = key.split(".")[1];
      let menuMainVoice = menuVoices.find(el => el.keyId === settingStringJSONId);
      menuMainVoice ??= { description: "", properties: {}, title: "", keyId: settingStringJSONId };
      switch (settingStringJSONKey) {
        case "title":       menuMainVoice.title = value; break;
        case "description": menuMainVoice.description = value; break;
        case "properties":  menuMainVoice.properties = this.parseSubVoices(value); break;
      }
      const foundIndex = menuVoices.findIndex((el) => el.keyId === menuMainVoice!.keyId);
      if(foundIndex > -1) {
        menuVoices[foundIndex] = menuMainVoice;
      } else {
        menuVoices.push(menuMainVoice);
      }
    }
    return { menuVoices: menuVoices } as DynamicSettings;
  }

  private parseSubVoices(propertiesSet: any): { [p: string]: IOption[] } {
    const properties: { [p: string]: IOption[] } = {};

    for(let key in propertiesSet) {
      const value = propertiesSet[key];
      const optionsGroupTitle = key.split(".")[0];
      const optionsGroupCurrentTitle = key.split(".")[1];

      const newProperty = {
        title: optionsGroupCurrentTitle,
        description: value.description,
        default: value.default,
        type: value.type
      };
      if (properties[optionsGroupTitle]) {
        properties[optionsGroupTitle].push(newProperty);
      } else {
        properties[optionsGroupTitle] = [newProperty];
      }
    }

    return properties;
  }
}
