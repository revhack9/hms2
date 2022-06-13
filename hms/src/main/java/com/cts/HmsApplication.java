package com.cts;

import java.util.Arrays;
import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.cts.model.Person;
import com.cts.model.Role;
import com.cts.model.Gender;
import com.cts.model.HmsUser;
import com.cts.model.UserAuthority;
import com.cts.repository.DoctorRepository;
import com.cts.repository.HmsUserRepository;
import com.cts.repository.UserAuthorityRepository;

@SpringBootApplication
public class HmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(HmsApplication.class, args);
	}

	@Bean
	public BCryptPasswordEncoder encoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	CommandLineRunner init(DoctorRepository repo, HmsUserRepository hmsUserRepository, BCryptPasswordEncoder encoder,
			UserAuthorityRepository userAuthorityRepository) {
		return args -> {
			Person doc = Person.builder()
					.name("khushi")
					.qualification("mbbs")
					.specialist("sergeon")
					.mobile_no("7898456783")
					.gender(Gender.FEMALE)
					.age(24)
					.role(Role.DOCTOR)
					.build();
			repo.save(doc);
			Person rec = Person.builder()
					.name("riya")
					.qualification("mba")
					.specialist("sergeon")
					.mobile_no("7898456783")
					.gender(Gender.FEMALE)
					.age(24)
					.role(Role.RECEPTIONIST)
					.build();

			repo.save(rec);
			
			Arrays.asList(UserAuthority.builder()
					.authority("ROLE_RECEPTIONIST")
					.build(),
					UserAuthority.builder()
							.authority("ROLE_DOCTOR")
							.build())
					.forEach(ua -> userAuthorityRepository.save(ua));
			UserAuthority receptionistRole = userAuthorityRepository.findAll()
					.stream()
					.filter(ua -> ua.getAuthority()
							.equals("ROLE_RECEPTIONIST"))
					.findFirst()
					.get();
			UserAuthority doctorRole = userAuthorityRepository.findAll()
					.stream()
					.filter(ua -> ua.getAuthority()
							.equals("ROLE_DOCTOR"))
					.findFirst()
					.get();
			HmsUser user = HmsUser.builder()
					.email("riya@gmail.com")
					.password(encoder.encode("riya@28"))
					.authorities(Arrays.asList(receptionistRole))
					.person(rec)
					.build();
			HmsUser user2 = HmsUser.builder()
					.email("khushi@gmail.com")
					.password(encoder.encode("khushi"))
					.authorities(Arrays.asList(doctorRole))
					.person(doc)
					.build();

			hmsUserRepository.save(user);
			hmsUserRepository.save(user2);
			
		};
	}
}
