package com.example.demo.model;

import java.time.Instant;

public class CarDTO {

    private String vin;
    private String make;
    private String model;
    private int milage;
    private Instant created;

    public CarDTO(String vin, String make, String model, int milage) {
        this.vin = vin;
        this.make = make;
        this.model = model;
        this.milage = milage;
        this.created = Instant.now();
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getMilage() {
        return milage;
    }

    public void setMilage(int milage) {
        this.milage = milage;
    }

    public Instant getCreated() {
        return created;
    }

    public void setCreated(Instant created) {
        this.created = created;
    }
}
