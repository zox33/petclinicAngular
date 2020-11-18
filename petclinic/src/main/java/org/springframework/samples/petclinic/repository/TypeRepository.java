package org.springframework.samples.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.PetType;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<PetType,Integer>{

	PetType findByNameAllIgnoreCase(String name);

}