/**
 * 
 */
package org.springframework.samples.petclinic.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

/**
 * @author vmiranal
 *
 */
@Getter
@Setter
@Builder
@AllArgsConstructor
public class NewVetDto {
	
	private String firstName;
	private String lastName;

}
