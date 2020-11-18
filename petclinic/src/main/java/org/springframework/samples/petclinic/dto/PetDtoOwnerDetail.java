/**
 * 
 */
package org.springframework.samples.petclinic.dto;

import java.util.Date;

import com.fasterxml.jackson.annotation.JsonFormat;

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
public class PetDtoOwnerDetail {
	
	private Integer id;
	
	private String name;

	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd")
    private Date birthDate;

    private int type;

    private int owner;

}
