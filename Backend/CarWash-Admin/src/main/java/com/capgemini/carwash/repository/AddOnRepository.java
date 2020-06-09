package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.AddOn;

@Repository
public interface AddOnRepository extends MongoRepository<AddOn, String>{

	Optional<AddOn> findByAddonid(String addonid);
	
	void deleteByAddonid(String addonid);
}
