package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.models.Pet;


public interface PetRepository extends  JpaRepository<Pet, String> {

}
