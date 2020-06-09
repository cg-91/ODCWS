package com.capgemini.carwash.entity;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collation = "tbl_custprofile")
public class CustomerProfile {

	@Id
	private Long id;
	
	@NotEmpty
    @Size(max = 15)
    private String phoneNumber;

    @Enumerated(EnumType.STRING)
    @NotEmpty
    private Gender gender;

    @Temporal(TemporalType.DATE)
    @NotEmpty
    private Date dateOfBirth;

    @NotEmpty
    @Size(max = 100)
    private String address1;

    @NotEmpty
    @Size(max = 100)
    private String address2;

    @NotEmpty
    @Size(max = 100)
    private String street;

    @NotEmpty
    @Size(max = 100)
    private String city;

    @NotEmpty
    @Size(max = 100)
    private String state;

    @NotEmpty
    @Size(max = 100)
    private String country;

    @NotEmpty
    @Size(max = 32)
    private String zipCode;

  //  @OneToOne(fetch = FetchType.LAZY, optional = false)
 //   @JoinColumn(name = "user_id", nullable = false)
 //   private User user;
}
