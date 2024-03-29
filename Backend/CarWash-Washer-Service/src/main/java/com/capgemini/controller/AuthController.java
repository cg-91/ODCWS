package com.capgemini.controller;

import static org.springframework.http.ResponseEntity.ok;

import java.util.HashMap;
import java.util.Map;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.config.JwtTokenProvider;
import com.capgemini.entity.Washer;
import com.capgemini.repository.WasherRepository;
import com.capgemini.service.CustomUserDetailsService;

import lombok.extern.slf4j.Slf4j;


@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/auth")
@Slf4j
public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@Autowired
	private WasherRepository washerRepository;

	@Autowired
	private CustomUserDetailsService userService;

	@SuppressWarnings("rawtypes")
	@PostMapping("/login")
	public ResponseEntity login(@RequestBody AuthBody data) {
		log.info("Washer Login Controller");
		try {
			String username = data.getEmail();
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, data.getPassword()));
			String token = jwtTokenProvider.createToken(username, this.washerRepository.findByEmail(username).getRoles());
			Map<Object, Object> model = new HashMap<>();
			model.put("username", username);
			model.put("token", token);
			return ok(model);
		} catch (AuthenticationException e) {
			log.error("Invalid email/password supplied");
			throw new BadCredentialsException("Invalid email/password supplied");
		}
	}

	@SuppressWarnings("rawtypes")
	@PostMapping("/signup")
	public ResponseEntity register(@RequestBody Washer washer) {
		Random random = new Random();
		washer.setWash_id(random.nextInt(1000));
		log.info("Washer signup Controller");
		Washer userExists = userService.findUserByEmail(washer.getEmail());
		if (userExists != null) {
			log.error("Username already exists");
			throw new BadCredentialsException("User with username: " + washer.getEmail() + " already exists");
		}
		userService.saveUser(washer);
		Map<Object, Object> model = new HashMap<>();
		model.put("message", "User registered successfully");
		return ok(model);
	}
}