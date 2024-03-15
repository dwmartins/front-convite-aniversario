export interface Guests {
    id: number;
    name: string;
    escorts: number;
    createdAt: string;
    updatedAt: string;
    [key: string]: string | number | boolean;
}