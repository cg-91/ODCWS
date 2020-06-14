package com.capgemini.entity;

import java.util.Set;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "tbl_washer")
@Data
public class Washer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String wash_id;
	
	@NotEmpty
	private String email;
	
	@NotEmpty
	private String password;
	
	@NotEmpty
	private String username;
	
	@NotEmpty
	@DBRef
    private Set<Role> roles;
	
    	
}