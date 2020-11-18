package org.springframework.samples.petclinic.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.samples.petclinic.dto.PetDtoList;
import org.springframework.samples.petclinic.model.Pet;
import org.springframework.stereotype.Repository;

@Repository
public interface PetRepository extends JpaRepository<Pet,Integer>{

		
//	//Obtener las mascotas nacidas en 2010 ordenadas por fecha de nacimiento ascendente.
//	@Query("SELECT p FROM PET p WHERE p.birthday BETWEEN '2010-01-01' AND '2011-01-01' ORDER BY p.birthday ASC")
//	public List<Pet> getBirthDayFrom2010year();
//	
//	//Obtener las mascotas nacidas en 2010 ordenadas por fecha de nacimiento ascendente.
//	@Query("SELECT p FROM PET p WHERE YEAR(p.birthday)='2010' ORDER BY p.birthday ASC")
//	public List<Pet> getBirthDayFrom2010();
//	
//	//Obtener las mascotas nacidas entre las fechas indicadas, ordenadas por fecha de nacimiento ascendente.
//	public List<Pet> findByStartDateBetweenOrderByBirthdayAsc (Date from, Date to, Date birthday);
//	
//	//Obtener todas las visitas para una mascota a partir de su nombre. visits
//	public List<Visit> findByName(String name);
//	
//	//Obtener las 4 visitas más recientes de todo el sistema.
//	public List<Visit> findTop4OrderByDateAsc();
//

	@Query("select new org.springframework.samples.petclinic.dto.PetDtoList(p.id, p.name, p.birthDate, p.type.name, p.owner.firstName) from Pet p")
	List<PetDtoList> findPets();
	
	
}