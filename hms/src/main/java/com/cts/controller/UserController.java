package com.cts.controller;

import java.security.Principal;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.repository.HmsUserRepository;

import lombok.extern.slf4j.Slf4j;

@RestController
@Slf4j
// @RequiredArgsConstructor
@RequestMapping("/api/hms")

public class UserController {
	private HmsUserRepository hmsUserRepository;
	String mail = "";

	@PreAuthorize("hasRole('DOCTOR') or hasRole('RECEPTIONIST') ")
	@GetMapping("/user")
	public String currentUserName(Principal principal) {
		//
		log.info("Getting user who logged in");
		mail = principal.toString();

		return principal.getName();
	}

}
