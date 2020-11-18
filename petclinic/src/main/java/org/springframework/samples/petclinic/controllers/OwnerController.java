/**
 * 
 */
package org.springframework.samples.petclinic.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.samples.petclinic.dto.NewOwnerDto;
import org.springframework.samples.petclinic.dto.OwnerDto;
import org.springframework.samples.petclinic.dto.OwnerDtoDetail;
import org.springframework.samples.petclinic.dto.converter.OwnerConverter;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.services.OwnerService;
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
@RequestMapping("/owner")
public class OwnerController {
	
	@Autowired
	OwnerService os;
	
	@Autowired
	OwnerConverter oc;
	
	
	@GetMapping("/")
	public ResponseEntity<List<OwnerDto>> getOwners() {
		return new ResponseEntity<List<OwnerDto>>(os.findAllOwners(), HttpStatus.OK);
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<OwnerDtoDetail> getOwner(@PathVariable Integer id) {
		Owner ow = os.findOneOwner(id);
		return new ResponseEntity<OwnerDtoDetail>(oc.convertOwnerToOwnerDtoDetail(ow), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<NewOwnerDto> addPet(@RequestBody NewOwnerDto ownerDto) {
		os.save(oc.convertNewOwnerDtoToOwner(ownerDto));
		return new ResponseEntity<NewOwnerDto>(ownerDto,HttpStatus.CREATED);
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<OwnerDtoDetail> editOwner(@PathVariable Integer id, @RequestBody NewOwnerDto ownerDto) {
		Owner owner = os.findOneOwner(id);
		owner.setFirstName(ownerDto.getFirstName());
		owner.setAddress(ownerDto.getAddress());
		owner.setLastName(ownerDto.getLastName());
		owner.setTelephone((ownerDto.getTelephone()));
		owner.setCity(ownerDto.getCity());

		os.save(owner);
		return new ResponseEntity<OwnerDtoDetail>(oc.convertOwnerToOwnerDtoDetail(owner),HttpStatus.CREATED);
	
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> deletePet(@PathVariable Integer id) {
		
		Owner owner = os.findOneOwner(id);
		if(owner == null) {
			return  ResponseEntity.notFound().build();
		}else {
			os.deleteOwner(id);
			return  ResponseEntity.noContent().build();
	
		}
	}

}
