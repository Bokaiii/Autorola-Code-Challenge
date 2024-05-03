import { Timestamp } from "rxjs";

export interface CarDTO {
    vin: string;
    make: string;
    model: string;
    mileage: number;
    created: Date;
}