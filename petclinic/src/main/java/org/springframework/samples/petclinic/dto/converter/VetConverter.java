/**
 * 
 */
package org.springframework.samples.petclinic.dto.converter;

import org.springframework.samples.petclinic.dto.NewVetDto;
import org.springframework.samples.petclinic.model.Vet;
import org.springframework.stereotype.Component;

/**
 * @author vmiranal
 *
 */
@Component

public class VetConverter {

	
	public Vet converVetDtoToVet(NewVetDto vetDto) {		
		return Vet.builder()
				.firstName(vetDto.getFirstName())
				.lastName(vetDto.getLastName())
				.build();
	}
	
}
