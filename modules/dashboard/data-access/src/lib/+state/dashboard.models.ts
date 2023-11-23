
export interface DashboardRequest {
  id: number;
}

export interface DashboardResponse {
  menus: MenuEntity[];
  languages: LanguageEntity[];
}

export interface MenuEntity {
  id: number;
  icon: string;
  name: string;
  items: Array<MenuEntity & SubMenuEntity>;
}

export interface LanguageEntity {
  name: string;
  icon: string;
  code: string;
}

export interface SubMenuEntity {
  link: string;
  name: string;
}