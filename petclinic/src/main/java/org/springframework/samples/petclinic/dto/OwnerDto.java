package org.springframework.samples.petclinic.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Setter @Getter
@AllArgsConstructor
public class OwnerDto {

		private String firstName;
		private String lastName;
	    private String address;
	    private String city;
	    private String telephone;
	  
	}
