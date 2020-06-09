package com.capgemini.carwash.feignclient.entity;

import lombok.Data;

@Data
public class ServicePlan {

	private Long serviceplanid;
	
	private String 	spname;
	
	private Double price;
}
