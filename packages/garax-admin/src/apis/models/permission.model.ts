export interface PermissionModel {
    name: string;
    view: boolean;
    add: boolean;
    edit: boolean;
    delete: boolean;
    import: boolean;
    export: boolean;
}