/**
 * 
 */
package org.springframework.samples.petclinic.dto;


import java.util.Date;

import lombok.Builder;
import lombok.Data;


/**
 * @author victor
 *
 */
@Builder
@Data
public class PetDto {

	
		private String name;

	    private Date birthDate;

	    private String type;


	    private String owner;


		public String getName() {
			return name;
		}


		public void setName(String name) {
			this.name = name;
		}


		public Date getBirthDate() {
			return birthDate;
		}


		public void setBirthDate(Date birthDate) {
			this.birthDate = birthDate;
		}


		public String getType() {
			return type;
		}


		public void setType(String type) {
			this.type = type;
		}


		public String getOwner() {
			return owner;
		}


		public void setOwner(String owner) {
			this.owner = owner;
		}





		public PetDto( String name, Date birthDate, String type, String owner) {
			this.name = name;
			this.birthDate = birthDate;
			this.type = type;
			this.owner = owner;
		}	    
		
		
		
		
	    
	}
