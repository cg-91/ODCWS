package com.capgemini.carwash.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tbl_serviceplan")
public class ServicePlan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long serviceplanid;
	
	@NotEmpty
	private String 	spname;
	
	@NotEmpty
	private Double price;
}
