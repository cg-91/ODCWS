package com.capgemini.carwash.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.carwash.service.CustomerService;

import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api")
@Slf4j
@CrossOrigin
public class CustomerController {

	@Autowired
	private CustomerService service;
	
	@GetMapping("/customerList")
	public ResponseEntity<?> getAllCustomers(){
		log.info("---fetchging all the Customer details---");
		return ResponseEntity.ok(service.getAllCustomers());
	}
	
//	@PostMapping("/store")
//	public Customer Store(@RequestBody Customer cust) {
//		return customerRepository.save(cust);
//	}
}