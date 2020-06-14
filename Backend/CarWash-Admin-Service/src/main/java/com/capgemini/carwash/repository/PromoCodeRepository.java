package com.capgemini.carwash.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.capgemini.carwash.entity.PromoCode;

public interface PromoCodeRepository extends MongoRepository<PromoCode, Integer> {

	Optional<PromoCode> findByPromocodeid(Integer promocodeid);

	void deleteByPromocodeid(Integer promocodeid);
}
