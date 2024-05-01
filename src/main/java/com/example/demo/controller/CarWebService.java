package com.example.demo.controller;

import com.example.demo.model.CarDTO;
import com.example.demo.services.CarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/cars")
public class CarWebService {

    CarRepository carRepository;

    public CarWebService() {
        carRepository = new CarRepository();
    }

    @RequestMapping("/get")
    public List<CarDTO> get() {
        return carRepository.get();
    }

    @RequestMapping("/get/{vin}")
    public CarDTO get(@PathVariable String vin) {
        return carRepository.get(vin);
    }

    @PostMapping("/new")
    public void create(@RequestBody CarDTO car) {
        carRepository.create(car);
    }

    @DeleteMapping("/{vin}")
    public void delete(@PathVariable String vin) {
        carRepository.delete(vin);
    }

    @PutMapping
    public void edit(@RequestBody CarDTO car) {
        carRepository.edit(car);
    }
}
