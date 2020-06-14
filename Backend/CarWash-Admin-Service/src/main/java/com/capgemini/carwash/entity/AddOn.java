package com.capgemini.carwash.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tbl_addon")
public class AddOn {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer addonid;
	
	@NotEmpty
	private String name;
	
	@NotEmpty
	private Double price;
}
