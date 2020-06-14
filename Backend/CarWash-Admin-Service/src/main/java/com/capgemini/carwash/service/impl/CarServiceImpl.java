package com.capgemini.carwash.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.carwash.entity.CarDetails;
import com.capgemini.carwash.repository.CarRepository;
import com.capgemini.carwash.service.CarService;

@Service
public class CarServiceImpl implements CarService{

	@Autowired
	private CarRepository carRepository;
	
	@Override
	public List<CarDetails> getAllCars() {
		return carRepository.findAll();
	}

	@Override
	public Optional<CarDetails> getCarById(Integer carid) {
		Optional<CarDetails> carOptional = carRepository.findByCarid(carid);
	//	CarDetails carDetails = carOptional.orElse(new CarDetails());
		return carOptional;
	}

	@Override
	public Optional<CarDetails> getCarByName(String carname) {
		Optional<CarDetails> carOptional = carRepository.findByCarname(carname);
	//	CarDetails carDetails = carOptional.orElse(new CarDetails());
		return carOptional;
	}

	@Override
	public CarDetails saveCar(CarDetails carDetails) {
		return carRepository.save(carDetails);
	}

	@Override
	public void deleteCarById(Integer carid) {
		carRepository.deleteByCarid(carid);
	}
}
