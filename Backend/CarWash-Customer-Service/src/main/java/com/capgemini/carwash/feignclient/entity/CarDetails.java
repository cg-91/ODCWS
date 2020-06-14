package com.capgemini.carwash.feignclient.entity;

import lombok.Data;

@Data
public class CarDetails {

    private String carid;
	private String carname;
    private String car_type;
    private String colour;
    private String reg_number;
    private String imageUrl;
}
