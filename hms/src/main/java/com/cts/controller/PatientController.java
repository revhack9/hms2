package com.cts.controller;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.Patient;
import com.cts.repository.PatientRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/hms/receptionist")
@CrossOrigin(origins ="*")
@RequiredArgsConstructor
@Slf4j
public class PatientController {
	private final PatientRepository patientRepo;


	// build create patient REST API
	@PreAuthorize("hasRole('RECEPTIONIST')")
	@PostMapping("/patient")
	public Patient create(@RequestBody Patient patient) {
		log.info(patient.toString());
		return patientRepo.save(patient);

	}
}
