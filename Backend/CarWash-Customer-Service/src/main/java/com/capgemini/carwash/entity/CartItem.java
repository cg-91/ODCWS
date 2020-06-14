package com.capgemini.carwash.entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.validation.constraints.NotEmpty;

import org.springframework.data.mongodb.core.mapping.Document;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Document(collection = "tbl_cartitem")
@Data
public class CartItem {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer cartItemId;
	
	@NotEmpty
	private Integer quantity;
	
	@NotEmpty
	private Double price;
	
	@ManyToOne
	@JoinColumn(name = "cart_id")
	@JsonIgnore
	private CartDetails cartDetails;
}
