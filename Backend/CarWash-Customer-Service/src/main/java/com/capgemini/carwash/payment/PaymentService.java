package com.capgemini.carwash.payment;

import org.springframework.stereotype.Service;

@Service
public interface PaymentService {

	public PaymentDetail proceedPayment(PaymentDetail paymentDetail);
	
	public String payuCallback(PaymentCallback paymentCallback);
	
	public void savePaymentDetail(PaymentDetail paymentDetail);
}
