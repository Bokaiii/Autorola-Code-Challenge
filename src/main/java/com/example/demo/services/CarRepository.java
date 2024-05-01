package com.example.demo.services;

import com.example.demo.model.CarDTO;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

public class CarRepository {

    private HashMap<String, CarDTO> carDB = new HashMap<>();

    public List<CarDTO> get() {
        return new ArrayList<CarDTO>(carDB.values());
    }

    public CarDTO get(String vin) {
        return carDB.get(vin);
    }

    public void create(CarDTO car) {
        carDB.put(car.getVin(), car);
    }

    public void delete(String vin) {
        carDB.remove(vin);
    }

    public void edit(CarDTO car) {
        carDB.put(car.getVin(), car);
    }
}
