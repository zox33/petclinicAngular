/**
 * 
 */
package org.springframework.samples.petclinic.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @author vmiranal
 *
 */

@Builder
@Getter @Setter
@AllArgsConstructor @NoArgsConstructor
public class NewTypeDto {

	private String name;
}
