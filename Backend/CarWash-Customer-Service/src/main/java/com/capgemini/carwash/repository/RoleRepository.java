package com.capgemini.carwash.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capgemini.carwash.entity.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

	Role findByRole(String role);
}