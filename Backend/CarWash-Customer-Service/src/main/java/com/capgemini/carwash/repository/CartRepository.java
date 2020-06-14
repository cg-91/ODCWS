package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.CartDetails;

@Repository
public interface CartRepository extends MongoRepository<CartDetails, Integer>{

	Optional<CartDetails> findByCartid(Integer cartid);
	
	void deleteByCartid(Integer cartid);
}
