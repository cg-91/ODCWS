package com.capgemini.carwash.service;

import java.util.List;

import com.capgemini.carwash.entity.User;


public interface UserService {

	User save(User user);
	
	List<User> getCustomerListing();
}
