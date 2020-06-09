package com.capgemini.carwash.payment;

import java.util.Date;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collation = "tbl_payment")
public class Payment {

	@Id
    private String id;

	private String email;

	private String name;

	private String phone;

	private String productInfo;

	private Double amount;

	@Enumerated(EnumType.STRING)
    private PaymentStatus paymentStatus;

	@Temporal(TemporalType.DATE)
    private Date paymentDate;

	private String txnId;

	private String mihpayId;

	@Enumerated(EnumType.STRING)
    private PaymentMode mode;
}