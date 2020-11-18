/**
 * 
 */
package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.dto.NewTypeDto;
import org.springframework.samples.petclinic.dto.converter.TypeConverter;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.samples.petclinic.services.TypeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author victor
 *
 */
@CrossOrigin(origins = "http://localhost:4200")
@Controller
@RequestMapping("/types")
public class TypeController {
	
	@Autowired
	TypeService ts;
	
	
	@Autowired
	TypeConverter tc;
	
	@GetMapping("/")
	public ResponseEntity<List<PetType>> tipos() {
		return new ResponseEntity<List<PetType>>(ts.findAll(), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<?> addType(@RequestBody NewTypeDto petTypeDto) {
				
		if(ts.findByName(petTypeDto.getName())==null) {
			ts.saveType(tc.converPetTypeDtoToPetType(petTypeDto));
			return new ResponseEntity<NewTypeDto>(petTypeDto,HttpStatus.CREATED);

		}else {
			return new ResponseEntity<String>("Este tipo ya está creado",HttpStatus.BAD_REQUEST);

		}
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deleteType(@PathVariable Integer id) {
		
		PetType type = ts.findOne(id);
		if(type == null) {
			return  ResponseEntity.notFound().build();
		}else {
			ts.deleteType(id);
			return  ResponseEntity.noContent().build();
	
		}
	}
	
}
