package com.capgemini.carwash.service;

import java.util.List;
import java.util.Optional;

import com.capgemini.carwash.entity.PromoCode;

public interface PromoCodeService {

	List<PromoCode> getAllPromoCode();
	
	Optional<PromoCode> getByPCId(String promocodeid);
}
