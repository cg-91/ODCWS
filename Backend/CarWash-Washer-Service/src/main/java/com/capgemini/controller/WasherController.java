package com.capgemini.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.service.WasherService;

@RestController
@RequestMapping("/api")
public class WasherController {

	@Autowired
	private WasherService service;
	
	@GetMapping("/washer/washerList")
	public ResponseEntity<?> getAllWasher(){
		return ResponseEntity.ok(service.getAllWasher());
	}
}