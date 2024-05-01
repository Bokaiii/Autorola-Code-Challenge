# Autorola Code Challenge
The project consists of a backend project and a frontend project. The frontend project is out of scope, but can be found in the "frontend" folder.

## Endpoints
The backend runs on localhost port 9090 and all endpoints have the prefix /cars
The backend exposes 5 endpoints;
```
1. getAll: localhost:9090/cars
2. get:     .../cars/{vin}
3. create:  .../cars/new
4. delete:  .../cars/{vin}
5. edit:    .../cars
```

Create and Edit endpoints take a CarDTO object.

## How to run the project
To run the project simply run the "bootRun" gradle job either from an IDEA or from the terminal using the command:
```
./gradlew bootRun
```

In order to test the backend you can use a dedicated tool or run curL commands;

```
curl "http://localhost:9090/cars"
```
To get all cars in the database

```
curl --header "Content-type: application/json" --request POST -d '{"vin":"3","make":"BMW","model":"M3","milage":200000,"created":"2024-05-01T18:56:40.999322Z"}' "http://localhost:9090/cars/new"
```

Running the get command will show that the new car has been added to the database.

Alternatively, run the frontend by running the following command from the frontend folder.
```
ng serve
```

The frontend project - written in Angular - runs on port 4200 and from there, all CRUD operations can be tested.
