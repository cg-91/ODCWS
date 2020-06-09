package com.capgemini.carwash.payment;

import lombok.Data;

@Data
public class PaymentCallback {

	private String txnid;
    private String mihpayid;
    private PaymentMode mode;
    private String status;
    private String hash;
}
