export interface TreeViewEntity {
    id: number;
    label?: string;
    name?: string;
    avatar?: string;
    count?: number;
    children?: TreeViewEntity[];
    visible?: boolean;
}