import { IdNameModel } from "core";

export interface DictionarydRequest {
  id: number;
}

export interface DictionaryResponse {
  permissions: IdNameModel[];
  modules: IdNameModel[];
  languages: LanguageEntity[] 
}

export interface LanguageEntity {
  name: string;
  icon: string;
  code: string;
}