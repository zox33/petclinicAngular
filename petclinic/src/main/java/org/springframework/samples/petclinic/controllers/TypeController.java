/**
 * 
 */
package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.samples.petclinic.services.TypeService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
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
	
	@GetMapping("/")
	public ResponseEntity<List<PetType>> tipos() {
		return new ResponseEntity<List<PetType>>(ts.findAll(), HttpStatus.OK);
	}
}
