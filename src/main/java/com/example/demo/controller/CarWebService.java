package com.example.demo.controller;

import com.example.demo.model.CarDTO;
import com.example.demo.services.CarRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/cars")
public class CarWebService {

    CarRepository carRepository;

    public CarWebService() {
        carRepository = new CarRepository();
    }

    @RequestMapping("")
    public List<CarDTO> get() {
        return carRepository.get();
    }

    @RequestMapping("/{vin}")
    public CarDTO get(@PathVariable String vin) {
        return carRepository.get(vin);
    }

    @PostMapping("/new")
    public CarDTO create(@RequestBody CarDTO car) {
        return carRepository.create(car);
    }

    @DeleteMapping("/{vin}")
    public void delete(@PathVariable String vin) {
        carRepository.delete(vin);
    }

    @PutMapping("")
    public void edit(@RequestBody CarDTO car) {
        carRepository.edit(car);
    }
}
