export class QueryDto {
    search: string;
    skip: number;
    take: number;
    categoryIds: number[];
    less: number;
    more: number;
}