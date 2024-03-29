package com.capgemini.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capgemini.entity.Role;

public interface RoleRepository extends MongoRepository<Role, String> {

	Role findByRole(String role);
}