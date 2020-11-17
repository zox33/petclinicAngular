package org.springframework.samples.petclinic.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.samples.petclinic.repository.TypeRepository;
import org.springframework.stereotype.Service;

@Service
public class TypeService {

	@Autowired
	TypeRepository tpRepo;
	
	public PetType findOne(int id) {
		return tpRepo.findOne(id);
	}
	

}
