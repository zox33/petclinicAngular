package org.springframework.samples.petclinic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.dto.PetDtoList;
import org.springframework.samples.petclinic.model.Pet;
import org.springframework.samples.petclinic.repository.PetRepository;
import org.springframework.stereotype.Service;

@Service
public class PetService{
	
	@Autowired
	PetRepository pr;
	
	public List<PetDtoList> findAllPets(){
		List<PetDtoList> aux = pr.findPets();
		return aux;
	}
		
	public void save (Pet p) {
		pr.save(p);
	}
	
	public Pet findById(Integer id) {
		return pr.findOne(id); 
	}
	
	public void deletePet(Integer id) {
		pr.delete(id);
	}
}
