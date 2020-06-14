package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.carwash.entity.ServicePlan;

@Repository
public interface ServicePlanRepository extends MongoRepository<ServicePlan, Integer>{

	Optional<ServicePlan> findByServiceplanid(Integer serviceplanid);
	
	void deleteByServiceplanid(Integer serviceplanid);
}
