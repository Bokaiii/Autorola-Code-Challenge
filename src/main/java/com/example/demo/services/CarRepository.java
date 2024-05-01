package com.example.demo.services;

import com.example.demo.model.CarDTO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CarRepository {

    private HashMap<String, CarDTO> carDB = new HashMap<>() {{
        put("1", new CarDTO("1", "Audi", "Q5", 200000));
        put("2", new CarDTO("2", "Audi", "A4", 200600));
    }};

    public List<CarDTO> get() {
        return new ArrayList<CarDTO>(carDB.values());
    }

    public CarDTO get(String vin) {
        return carDB.get(vin);
    }

    public CarDTO create(CarDTO car) {
        carDB.put(car.getVin(), car);
        return carDB.get(car.getVin());
    }

    public void delete(String vin) {
        carDB.remove(vin);
    }

    public void edit(CarDTO car) {
        carDB.put(car.getVin(), car);
    }
}
