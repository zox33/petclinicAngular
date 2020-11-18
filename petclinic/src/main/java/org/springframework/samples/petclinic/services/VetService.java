/**
 * 
 */
package org.springframework.samples.petclinic.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.model.Vet;
import org.springframework.samples.petclinic.repository.VetRepository;
import org.springframework.stereotype.Service;

/**
 * @author vmiranal
 *
 */
@Service
public class VetService {
	
	@Autowired
	VetRepository vetRepo;
	
	public List<Vet> findAll (){
		return vetRepo.findAll();
	}
	
	public Vet save (Vet vet){
		return vetRepo.save(vet);
	}
	public Vet findOne (Integer id){
		return vetRepo.findOne(id);
	}
	
	public void delete (Integer id){
		vetRepo.delete(id);
	}

}
