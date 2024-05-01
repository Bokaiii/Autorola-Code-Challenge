import { Timestamp } from "rxjs";

export interface CarDTO {
    vin: string;
    make: string;
    model: string;
    milage: number;
    created: Timestamp;
}