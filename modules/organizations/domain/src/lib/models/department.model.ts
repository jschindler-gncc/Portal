export interface DepartmentEntity {
    id: number;
    name: string;
    companyId: number;
    employees: number;
    parentDepartmentId: number;
}