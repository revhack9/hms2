package com.cts.controller;

import java.util.List;
import java.util.Optional;

import com.cts.exception.ResourceNotFoundException;
import com.cts.exception.UserError;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.cts.model.Appointment;
import com.cts.model.Prescription;
import com.cts.repository.AppointmentRepository;
import com.cts.repository.PrescriptionRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/api/hms/doctor")
@CrossOrigin(origins ="*")
@RequiredArgsConstructor
@Slf4j
public class DoctorController {
	private final AppointmentRepository appointementRepo;
	private final PrescriptionRepository prescriptionRepo;

	// @PreAuthorize("hasRole('DOCTOR')")
	/*
	 * @PostMapping("/create") // working public Doctor create(@RequestBody Doctor
	 * doctor) { log.info(doctor.toString()); return doctorRepo.save(doctor); }
	 */

	@PreAuthorize("hasRole('DOCTOR')")
	@GetMapping("/appointment/{id}")
	public ResponseEntity<Appointment> getAppointmentById(@PathVariable Integer id) {
		Appointment app = appointementRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Appointment not exist with id:" + id));
		return ResponseEntity.ok(app);
	}

	@PreAuthorize("hasRole('DOCTOR')")
	@PostMapping("/addPrescription/{appointmentId}")
	public Prescription add(@RequestBody Prescription prescription, @PathVariable Integer appointmentId) {
		Optional<Appointment> OptAppointment = appointementRepo.findById(appointmentId);
		prescription.setAppointment(OptAppointment.get());

		log.info(prescription.toString());
		return prescriptionRepo.save(prescription);
	}

	@PreAuthorize("hasRole('DOCTOR')")
	@GetMapping("/appointment")
	public ResponseEntity<List<Appointment>> getAppointment() {
		return ResponseEntity.ok(appointementRepo.findAll());// not working recursion
	}

	@ExceptionHandler
	@ResponseStatus(value = HttpStatus.BAD_REQUEST)
	public UserError handleException(Exception exception) {
		return UserError.builder()
				.message(exception.getMessage())
				.build();
	}

}

