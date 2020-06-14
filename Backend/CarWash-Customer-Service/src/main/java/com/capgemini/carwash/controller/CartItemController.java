package com.capgemini.carwash.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.carwash.service.CartItemService;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
@CrossOrigin
@RequestMapping("/api")
public class CartItemController {

	@Autowired
	private CartItemService service;
	
	@GetMapping("/cartItemList")
	public ResponseEntity<?> getAllCartItem() {
		Map<String, Object> ciMap = new HashMap<String, Object>();
		ciMap.put("status", "success");
		ciMap.put("data", service.getAllCartItem());
		log.info("---Fetching all the CartItem Details---");
		return ResponseEntity.ok(ciMap);
	}
}
