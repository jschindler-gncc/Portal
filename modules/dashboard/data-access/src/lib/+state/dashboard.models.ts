import { IdNameModel } from "core";

export interface DashboardRequest {
  id: number;
}

export interface DashboardResponse {
  menus: MenuEntity[];
}

export interface MenuEntity extends IdNameModel {
  icon: string;
  link?: string;
  items?: Array<MenuEntity & SubMenuEntity>;
}
export interface SubMenuEntity {
  link: string;
  name: string;
}