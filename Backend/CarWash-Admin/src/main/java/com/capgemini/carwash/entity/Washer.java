//package com.capgemini.carwash.entity;
//
//import java.io.Serializable;
//
//import javax.persistence.Entity;
//import javax.persistence.Id;
//import javax.persistence.Table;
//import javax.validation.constraints.NotEmpty;
//import javax.validation.constraints.NotNull;
//import javax.validation.constraints.Size;
//
//import org.hibernate.annotations.NaturalId;
//import org.springframework.data.mongodb.core.mapping.Document;
//
//import lombok.Data;
//
//@Data
//@Document(collection = "tbl_washer")
//public class Washer implements Serializable {
//	
//	
//	@Id
//    private Long id;
//
//    @NaturalId
//    @NotEmpty
//    private String email;
//    
//    @NotEmpty
//    @Size(min = 3, message = "Length must be more than 3")
//    private String password;
//    
//    @NotEmpty
//    private String name;
//    
//    @NotEmpty
//    private String phone;
//    
//    @NotEmpty
//    private String address;
//}