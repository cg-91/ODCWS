package com.capgemini.carwash.service;

import java.util.List;
import java.util.Optional;

import com.capgemini.carwash.entity.ServicePlan;

public interface ServicePlanService {

	List<ServicePlan> getAllServicePlan();
	
	Optional<ServicePlan> getBySPId(String serviceplanid);
}
