/**
 * 
 */
package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.dto.OwnerDto;
import org.springframework.samples.petclinic.services.OwnerService;
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
@RequestMapping("/owner")
public class OwnerController {
	
	@Autowired
	OwnerService os;
	
	
	@GetMapping("/")
	public ResponseEntity<List<OwnerDto>> getOwners() {
		return new ResponseEntity<List<OwnerDto>>(os.findAllOwners(), HttpStatus.OK);
	}

}
