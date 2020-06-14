package com.capgemini.carwash.entity;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.IndexDirection;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Document(collection = "tbl_customer")
@Data
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private String cust_id;
	
	@NotEmpty
	private String email;
	
	@NotEmpty
	private String password;
	
	@NotEmpty
	private String username;
	
	@NotEmpty
	@DBRef
    private Set<Role> roles;
	
//	@OneToOne(targetEntity = CustomerReviews.class, cascade = CascadeType.ALL)
//	@JoinColumn(name="crid", referencedColumnName = "cust_review_id")
//	private CustomerReviews customerReviews;
//
//	@OneToOne(targetEntity = CustomerProfile.class, cascade = CascadeType.ALL)
//	@JoinColumn(name="cpid", referencedColumnName = "id")
//	private CustomerProfile customerProfile;
}