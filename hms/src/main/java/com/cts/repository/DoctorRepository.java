package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.model.Person;

public interface DoctorRepository extends JpaRepository<Person, Integer> {

}
