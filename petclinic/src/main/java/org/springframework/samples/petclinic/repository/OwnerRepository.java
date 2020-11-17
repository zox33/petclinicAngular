package org.springframework.samples.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Owner;
import org.springframework.stereotype.Repository;

@Repository
public interface OwnerRepository extends JpaRepository<Owner,Integer>{

	
//	//Buscar por nombre y apellido 
//	@Query("SELECT o FROM OWNER o WHERE o.first_name LIKE CONCAT (:first_name,'%') OR o.last_name LIKE CONCAT (:last_name,'%')")
//	public List<Owner> OwnerByName(@Param("first_name") String first_name,
//									@Param("last_name") String last_name);
//	
//	//Buscar por nombre y apellido método 2
//	@Query("SELECT o FROM OWNER o WHERE o.first_name LIKE %?1% OR o.last_name LIKE %?2%")
//	public List<Owner> OwnerByName2(String first_name, String last_name);
//	
//	//Buscar por nombre y apellido método 3
//	public List<Owner> findByFirstnameLikeOrfindByLastnameLike(String first_name, String last_name);
// 
//	//Lista de Owners ordenada port apellido
//	public List<Owner> findByLastnameOrderByLastnameAsc(String lastname);
//	

	
}
