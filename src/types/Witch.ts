import type { Mahou } from "./Mahou";

export type Witch = {
    id: number,
    name: string,
    description: string,
    belongsTo: Mahou,
    image: string
};