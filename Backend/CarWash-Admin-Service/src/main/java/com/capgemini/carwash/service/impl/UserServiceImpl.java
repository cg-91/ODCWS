package com.capgemini.carwash.service.impl;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.carwash.entity.User;
import com.capgemini.carwash.repository.UserRepository;
import com.capgemini.carwash.service.UserService;

@Service

public class UserServiceImpl implements UserService{
	
	@Autowired
	private UserRepository userRepository;
	
	@Override
	@Transactional
	public User save(User user) {
    //register
       User savedUser = userRepository.save(user);
       return userRepository.save(savedUser);
    }

	@Override
	public List<User> getCustomerListing() {
		// TODO Auto-generated method stub
		return userRepository.findAll();
	}
}
