package org.springframework.samples.petclinic.dto.converter;

import org.springframework.samples.petclinic.dto.NewTypeDto;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.stereotype.Component;

@Component
public class TypeConverter {
	
	public PetType converPetTypeDtoToPetType(NewTypeDto petTypeDto) {
		return PetType.builder()
				.name(petTypeDto.getName())
				.build();			
	}
	
}
