package com.capgemini.carwash.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capgemini.carwash.entity.Customer;

public interface CustomerRepository extends MongoRepository<Customer, String> {

	Customer findByEmail(String email);
}