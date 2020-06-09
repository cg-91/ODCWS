package com.capgemini.carwash.entity;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.annotations.NaturalId;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tbl_users")
public class User implements Serializable {
	
	private static final long serialVersionUID = 2225076147595237386L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NaturalId
    @NotEmpty
    private String email;
    
    @NotEmpty
    @Size(min = 3, message = "Length must be more than 3")
    private String password;
    
    @NotEmpty
    private String name;
    
    @NotEmpty
    private String phone;
    
    @NotEmpty
    private String address;
}