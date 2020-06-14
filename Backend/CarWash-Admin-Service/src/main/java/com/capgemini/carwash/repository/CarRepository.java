package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.CarDetails;

@Repository
public interface CarRepository extends MongoRepository<CarDetails, Integer>{

	Optional<CarDetails> findByCarid(Integer carid);

	Optional<CarDetails> findByCarname(String carname);
	
	void deleteByCarid(Integer carid);
	
	boolean existsByCarid(Integer carid);
}
