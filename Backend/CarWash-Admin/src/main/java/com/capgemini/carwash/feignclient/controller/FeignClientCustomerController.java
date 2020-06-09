package com.capgemini.carwash.feignclient.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.carwash.feignclient.service.FeignClientCustomerService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api")
public class FeignClientCustomerController {
	
	@Autowired
	private  FeignClientCustomerService service;
	
	@GetMapping("/customerList")
	public ResponseEntity<?> getAllCustomers(){
		log.info("chandan");
		return ResponseEntity.ok(service.getAllCustomers());
	}
	
//	@GetMapping("/car/carlisting")
//	public ResponseEntity<?> getAllCars(){
////		List<CarDetails> carList = service.getAllCars();
//		Map<Object, Object> carMap = new HashMap<Object, Object>();
//		carMap.put("status", "success");
//		carMap.put("data", service.getAllCars());
////		Gson gson = new Gson();
////        String json = gson.toJson(carMap);
//		log.info("====fetchging all the Cars====");
//		return ResponseEntity.ok(carMap);
//	}
}
