package com.capgemini.carwash.feignclient.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "CarWash-Admin", url = "http://localhost:8083/api")
public interface FeignClientService {
	
	@GetMapping("/car/carlist")
	public ResponseEntity<?> getAllCars();
	
	@GetMapping("/serviceplan/spList")
	public ResponseEntity<?> getAllServicePlanList();
}
