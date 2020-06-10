package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.ServicePlan;

@Repository
public interface ServicePlanRepository extends MongoRepository<ServicePlan, String>{

	Optional<ServicePlan> findByServiceplanid(String serviceplanid);
	
	void deleteByServiceplanid(String serviceplanid);
}
