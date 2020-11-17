package org.springframework.samples.petclinic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.dto.OwnerDto;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.repository.OwnerRepository;
import org.springframework.stereotype.Service;

@Service
public class OwnerService {

	@Autowired
	OwnerRepository ownerRepo ;
	
	public Owner findOneOwner(int id){
		return ownerRepo.findOne(id);
	}
	
	public List<OwnerDto> findAllOwners(){
		return ownerRepo.findAllOwners();
	}
	

}
