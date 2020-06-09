package com.capgemini.carwash.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
@Slf4j
public class UserController {

	@PostMapping("/login")
	public ResponseEntity<?> login(@RequestBody AuthBody data) {
		log.info("Login Controller");
		System.out.println(data.getEmail() + " " + data.getPassword());
		String username = data.getEmail();
		String password = data.getPassword();
		System.out.println(username + " " + password);
		if (username.equals("admin@gmail.com") && password.equals("admin")) {
			Map<Object, Object> model = new HashMap<>();
			model.put("status", 200);
			model.put("username", username);
			model.put("token", password);
			return ResponseEntity.ok(model);
		} else {
			Map<Object, Object> model1 = new HashMap<>();
			model1.put("status", 400);
			model1.put("message", "Wrong Credentials");
			return ResponseEntity.ok(model1);
		}
	}
}
