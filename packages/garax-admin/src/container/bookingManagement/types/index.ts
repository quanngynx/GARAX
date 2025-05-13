/**
 * @description DEMO 
 */
export type TDataTableType = {
    key: string;
    name: string;
    age: number;
    address: string;
    tags: string[];
}

export interface IEventData {
    title?: string;
    start?: string;
    end?: string;
    description?: string;
    allDay?: boolean;
}
