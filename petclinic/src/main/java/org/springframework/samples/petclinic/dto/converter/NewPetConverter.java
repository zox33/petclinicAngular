package org.springframework.samples.petclinic.dto.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.samples.petclinic.dto.EditPetDto;
import org.springframework.samples.petclinic.dto.NewPetDto;
import org.springframework.samples.petclinic.dto.PetDto;
import org.springframework.samples.petclinic.dto.PetDtoOwnerDetail;
import org.springframework.samples.petclinic.model.Pet;
import org.springframework.samples.petclinic.repository.TypeRepository;
import org.springframework.samples.petclinic.services.OwnerService;
import org.springframework.samples.petclinic.services.PetService;
import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Component
@AllArgsConstructor
@NoArgsConstructor
public class NewPetConverter {
	
	@Autowired
	PetService petService;
	@Autowired
	OwnerService ownerService;
	@Autowired
	TypeRepository typeService;

	public Pet convertNewPetDtoToPet(NewPetDto petDto) {
		return Pet.builder()
				.name(petDto.getName())
				.owner(ownerService.findOneOwner(petDto.getOwner()))
				.type(typeService.findOne(petDto.getType()))
				.birthDate(petDto.getBirthDate())				
				.build();			
	}
	
	public NewPetDto convertPetToNewPetDto(Pet pet) {
		return NewPetDto.builder()
				.name(pet.getName())
				.owner(ownerService.findOneOwner(pet.getOwner().getId()).getId())
				.type(typeService.findOne(pet.getType().getId()).getId())
				.birthDate(pet.getBirthDate())				
				.build();			
	}
		
	public PetDto convertPetToPetDto(Pet pet) {
		return PetDto.builder()
				.name(pet.getName())
				.owner(ownerService.findOneOwner(pet.getOwner().getId()).getFirstName())
				.type(typeService.findOne(pet.getType().getId()).getName())
				.birthDate(pet.getBirthDate())				
				.build();
				
	}
	
	
	public Pet convertPetToEditPetDto(EditPetDto editPet) {
		return Pet.builder()
				.name(editPet.getName())
				.birthDate(editPet.getBirthDate())				
				.build();			
	}
	
	public EditPetDto convertEditPdtoToPet(Pet pet) {
		return EditPetDto.builder()
				.name(pet.getName())
				.birthDate(pet.getBirthDate())				
				.build();		
	}
	
	
	//ParaOwnerDTO
	public Pet convertPetDtoOwnerDetailToPet(PetDtoOwnerDetail petDto) {
		return Pet.builder()
				.name(petDto.getName())
				.owner(ownerService.findOneOwner(petDto.getOwner()))
				.type(typeService.findOne(petDto.getType()))
				.birthDate(petDto.getBirthDate())				
				.build();			
	}
	
	public PetDtoOwnerDetail convertPetToPetDtoOwnerDetail(Pet pet) {
		return PetDtoOwnerDetail.builder()
				.id(pet.getId())
				.name(pet.getName())
				.owner(ownerService.findOneOwner(pet.getOwner().getId()).getId())
				.type(typeService.findOne(pet.getType().getId()).getId())
				.birthDate(pet.getBirthDate())				
				.build();			
	}
	
}
