package com.capgemini.carwash.entity;

import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;

import org.hibernate.annotations.NaturalId;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collation = "tbl_cardetails")
public class CarDetails {

	@Id
    private Long car_id;

    @NaturalId
    @NotEmpty
    private String car_number;
    
    @NotEmpty
    private String car_type;
    
    @NotEmpty
    private String color;
    
    @NotEmpty
    private String reg_number;
}
