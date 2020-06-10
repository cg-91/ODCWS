package com.capgemini.carwash.feignclient.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.carwash.feignclient.entity.CarDetails;
import com.capgemini.carwash.feignclient.service.FeignClientService;
import com.google.gson.Gson;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@RequestMapping("/api")
public class FeignClientController {
	
	@Autowired
	private  FeignClientService service;
	
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
	
	@GetMapping("/car/carlist")
	public ResponseEntity<?> getAllCrsList(){
		return ResponseEntity.ok(service.getAllCars());
	}
	
	@GetMapping("/serviceplan/spList")
	public ResponseEntity<?> getAllServicePlanList(){
		return ResponseEntity.ok(service.getAllServicePlanList());
	}
}
