/**
 * 
 */
package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.dto.EditPetDto;
import org.springframework.samples.petclinic.dto.NewPetDto;
import org.springframework.samples.petclinic.dto.PetDto;
import org.springframework.samples.petclinic.dto.PetDtoList;
import org.springframework.samples.petclinic.dto.converter.NewPetConverter;
import org.springframework.samples.petclinic.model.Pet;
import org.springframework.samples.petclinic.services.PetService;
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
 * @author victor
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/pets")
public class PetController {

	@Autowired
	PetService ps;
	
	
	@Autowired
	NewPetConverter cv;
	
	
	@GetMapping("/")
	public ResponseEntity<List<PetDtoList>> getPets() {
		return new ResponseEntity<List<PetDtoList>>(ps.findAllPets(), HttpStatus.OK);
	}
		
	@PostMapping("/add")
	public ResponseEntity<PetDto> addPet(@RequestBody NewPetDto petDto) {
		ps.save(cv.convertNewPetDtoToPet(petDto));
		return new ResponseEntity<PetDto>(cv.convertPetToPetDto(cv.convertNewPetDtoToPet(petDto)),HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<PetDto> editPet(@PathVariable Integer id, @RequestBody EditPetDto petDto) {
		Pet pet2 = ps.findById(id);
		pet2.setName(petDto.getName());
		pet2.setBirthDate(petDto.getBirthDate());
		ps.save(pet2);
		return new ResponseEntity<PetDto>(cv.convertPetToPetDto(pet2),HttpStatus.CREATED);
	
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePet(@PathVariable Integer id) {
		
		Pet pet = ps.findById(id);
		if(pet == null) {
			return  ResponseEntity.notFound().build();
		}else {
			ps.deletePet(id);
			return  ResponseEntity.noContent().build();
	
		}
	}
	
	
	
}
