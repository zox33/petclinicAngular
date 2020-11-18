/**
 * 
 */
package org.springframework.samples.petclinic.dto;

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
public class NewOwnerDto {

	private String firstName;
	private String lastName;
    private String address;
    private String city;
    private String telephone;
  
}
