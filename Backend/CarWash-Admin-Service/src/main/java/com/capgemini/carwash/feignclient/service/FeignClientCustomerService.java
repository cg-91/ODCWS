package com.capgemini.carwash.feignclient.service;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;

@FeignClient(name = "CarWash-Customer", url = "http://localhost:8081/api")
public interface FeignClientCustomerService {
	
	@GetMapping("/customerList")
	public ResponseEntity<?> getAllCustomers();
}
