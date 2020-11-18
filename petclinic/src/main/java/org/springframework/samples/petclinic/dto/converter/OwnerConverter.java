/**
 * 
 */
package org.springframework.samples.petclinic.dto.converter;

import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.dto.NewOwnerDto;
import org.springframework.samples.petclinic.dto.OwnerDtoDetail;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.samples.petclinic.services.OwnerService;
import org.springframework.stereotype.Component;

/**
 * @author vmiranal
 *
 */
@Component
public class OwnerConverter {
	
	@Autowired
	NewPetConverter npc;
	@Autowired
	OwnerService ownerService;

	public Owner convertOwnerDtoDetailToOwner(OwnerDtoDetail ownerDto) {		
		return Owner.builder()
				.firtsName(ownerDto.getFirstName())
				.LastName(ownerDto.getLastName())
				.address(ownerDto.getAddress())
				.city(ownerDto.getCity())
				.telephone(ownerDto.getTelephone())
				.pets(ownerDto.getPets().stream().map(x-> npc.convertPetDtoOwnerDetailToPet(x)).collect(Collectors.toSet()))
				.build();			
	}
	
	public OwnerDtoDetail convertOwnerToOwnerDtoDetail(Owner owner) {		
		return OwnerDtoDetail.builder()
				.firstName(owner.getFirstName())
				.lastName(owner.getLastName())
				.address(owner.getAddress())
				.city(owner.getCity())
				.telephone(owner.getTelephone())
				.pets(owner.getPets().stream().map(x-> npc.convertPetToPetDtoOwnerDetail(x)).collect(Collectors.toSet()))
				.build();			
	}

	public Owner convertNewOwnerDtoToOwner(NewOwnerDto ownerDto) {		
		return Owner.builder()
				.firtsName(ownerDto.getFirstName())
				.LastName(ownerDto.getLastName())
				.address(ownerDto.getAddress())
				.city(ownerDto.getCity())
				.telephone(ownerDto.getTelephone())
				.build();			
	}
		
}
