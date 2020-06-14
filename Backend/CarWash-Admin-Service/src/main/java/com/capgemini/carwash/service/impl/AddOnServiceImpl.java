package com.capgemini.carwash.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.carwash.entity.AddOn;
import com.capgemini.carwash.repository.AddOnRepository;
import com.capgemini.carwash.service.AddOnService;

@Service
public class AddOnServiceImpl implements AddOnService{
	
	@Autowired
	private AddOnRepository addOnRepository;

	@Override
	public List<AddOn> getAllAddOnList() {
		return addOnRepository.findAll();
	}

	@Override
	public Optional<AddOn> getByAddOnid(Integer addonid) {
		Optional<AddOn> addOn = addOnRepository.findByAddonid(addonid); 
		return addOn;
	}

	@Override
	public AddOn saveAddOnDetails(AddOn addon) {
		return addOnRepository.save(addon);
	}

	@Override
	public void deleteByAddOnid(Integer addonid) {
		addOnRepository.deleteByAddonid(addonid);
	}
}
