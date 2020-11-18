package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.dto.NewVetDto;
import org.springframework.samples.petclinic.dto.converter.VetConverter;
import org.springframework.samples.petclinic.model.Vet;
import org.springframework.samples.petclinic.services.VetService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * 
 * @author vmiranal
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/vets")
public class VetsController {
	
	@Autowired
	VetService vs;
	
	@Autowired
	VetConverter vc;	
	
	
	@GetMapping("/")
	public ResponseEntity<List<Vet>> getVets() {
		return new ResponseEntity<List<Vet>>(vs.findAll(), HttpStatus.OK);
	}
	
	
	@PostMapping("/add")
	public ResponseEntity<Vet> addVet(@RequestBody NewVetDto vetDto) {
		vs.save(vc.converVetDtoToVet(vetDto));
		return new ResponseEntity<Vet>(vc.converVetDtoToVet(vetDto),HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<Vet> editOwner(@PathVariable Integer id, @RequestBody NewVetDto vetDto) {
		Vet vet = vs.findOne(id);
		vet.setFirstName(vetDto.getFirstName());
		vet.setLastName(vetDto.getLastName());
		vs.save(vet);
		return new ResponseEntity<Vet>(vc.converVetDtoToVet(vetDto),HttpStatus.CREATED);
	
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteVet(@PathVariable Integer id) {
		Vet vet = vs.findOne(id);
		if(vet == null) {
			return  ResponseEntity.notFound().build();
		}else {
			vs.delete(id);
			return  ResponseEntity.noContent().build();
	
		}
	}

}
