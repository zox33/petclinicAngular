package org.springframework.samples.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Vet;

public interface VetRepository extends JpaRepository<Vet,Integer>{

//	
//	//Lista filtrada por lastName
//	public List<Vet> findByLastname(String lastname);
//	
//	//Lista filtrada por lastName y firstName
//	public List<Vet> findByLastnameAndFirstname(String lastname, String firstname);
//	
//	//Lista filtrada por lastName o firstName
//	public List<Vet> findByLastnameOrFirstname(String lastname, String firstname);
//	
//	//lista de Vet que son Radiology
//	@Query("SELECT v FROM VET v JOIN FETCH SPECIALTY s WHERE v.specialties.name='radiology'")
//	public List<Vet> VetsRadiology();
// 
	
}
