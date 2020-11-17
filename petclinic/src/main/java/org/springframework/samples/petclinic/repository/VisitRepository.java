package org.springframework.samples.petclinic.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.samples.petclinic.model.Visit;

public interface VisitRepository  extends JpaRepository<Visit,Integer>{


}
