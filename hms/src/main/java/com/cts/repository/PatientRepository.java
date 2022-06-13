package com.cts.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer>{

}
