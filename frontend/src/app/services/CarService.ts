import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CarDTO } from "../../typings";


@Injectable({
    providedIn: 'root'
})
export class CarService {

    constructor(
        private httpClient: HttpClient
    ){ }

    public get(): Observable<CarDTO[]> {
        return this.httpClient.get<CarDTO[]>(`http://localhost:9090/cars`);
    }

    public getCar(vin: string): Observable<CarDTO> {
        return this.httpClient.get<CarDTO>(`http://localhost:9090/cars/${vin}`);
    }

    public createCar(car: CarDTO): Observable<CarDTO> {
        return this.httpClient.post<CarDTO>(`http://localhost:9090/cars/new`, car);
    }

    public deleteCar(vin: string): Observable<CarDTO> {
        return this.httpClient.delete<CarDTO>(`http://localhost:9090/cars/${vin}`);
    }

    public updateCar(car: CarDTO): Observable<void> {
        return this.httpClient.put<void>(`http://localhost:9090/cars`, car);
    }
}