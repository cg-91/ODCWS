package com.capgemini.carwash.feignclient.entity;

import java.util.Set;

import lombok.Data;

@Data
public class Customer {

	private String cust_id;
	private String email;
	private String password;
	private String username;
	private Set roles;
}