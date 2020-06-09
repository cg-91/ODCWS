package com.capgemini.carwash.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.User;

@Repository
public interface UserRepository extends MongoRepository<User, String>{
	
}