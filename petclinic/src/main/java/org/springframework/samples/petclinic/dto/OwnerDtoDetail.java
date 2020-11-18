/**
 * 
 */
package org.springframework.samples.petclinic.dto;

import java.util.Set;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

/**
 * @author vmiranal
 *
 */

@Builder
@Data
@AllArgsConstructor
public class OwnerDtoDetail {
	
	private String firstName;
	private String lastName;
    private String address;
    private String city;
    private String telephone;
    private Set<PetDtoOwnerDetail> pets;
}
