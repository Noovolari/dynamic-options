export enum OptionType {
  number = 'number',
  text = 'text',
  password = 'password',
  email = 'email',
}

export interface IOption {
  title: string;
  description: string;
  type: OptionType;
  default: any
}

export interface IMenuMainVoice {
  keyId: string;
  title: string;
  description: string;
  properties: { [optionKeyId: string] : IOption[]; }
}

export class DynamicSettings {
  menuVoices: IMenuMainVoice[] = [];
}
