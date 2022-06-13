package com.cts;


import static org.junit.jupiter.api.Assertions.assertEquals;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import com.cts.model.Gender;
import com.cts.model.HmsUser;
import com.cts.model.Person;
import com.cts.model.Role;
import com.cts.repository.DoctorRepository;
import com.cts.repository.HmsUserRepository;
import com.cts.valueobject.DoctorDto;
import org.junit.Before;
@SpringBootTest
class HmsApplicationTests {

	@Test
	void contextLoads() {
	}

	@Autowired
	private DoctorRepository repo;

	@Autowired()
	private HmsUserRepository hmsrpo;
	

	DoctorDto doctordto;
	private TestEntityManager entityManager;
	private BCryptPasswordEncoder encoder;

	@Before// save the data in Person and Hms_user with testing
	public void testCreateDoctor() {

		DoctorDto doctorDto = new DoctorDto();

		doctorDto.setName("Vipul g");
		doctorDto.setQualification("MBBS");
		doctorDto.setSpecialist("Surgeon");
		doctorDto.setGender(Gender.MALE);

		doctorDto.setMobile_no("1234567890");
		doctorDto.setAge(24);
		doctorDto.setEmail("vipul@gmail.com");
		doctorDto.setPassword("12345");

		HmsUser hmsuser = HmsUser.builder()
				.email(doctordto.getEmail())
				.password(encoder.encode(doctordto.getPassword()))
				.build();
		Person person = Person.builder()
				.name(doctordto.getName())
				.qualification(doctordto.getQualification())
				.specialist(doctordto.getSpecialist())
				.gender(doctordto.getGender())
				.mobile_no(doctordto.getMobile_no())
				.age(doctordto.getAge())
				.role(Role.DOCTOR)
				.build();
		Person savedDoctor = repo.save(person);
		hmsuser.setPerson(savedDoctor);
		hmsrpo.save(hmsuser);
		DoctorDto existDoctor = entityManager.find(DoctorDto.class, hmsuser.getUsername());
		assertEquals(existDoctor.getEmail(), hmsrpo.findByEmail(hmsuser.getEmail()));
	}

	@Test// test data of hmsuser Repository
	public void TestFindByUserByEmailDoctor() {

		String email = "receptionist@gmail.com";

		Optional<HmsUser> doctor = hmsrpo.findById(1);

		assertEquals(doctor.get()
				.getEmail(), email);

	}

	@Test//test Doctor Repository
	public void TestFindByPerson() {

		String name = "riya";

		String doctor = repo.findById(2)
				.get()
				.getName();

		assertEquals(name, doctor);
		
			
		}

	
	@Test//test data of hmsuser Repository
	public void TestfailFindByUserByEmailDoctor() {

		String email = "receptionist@gmail.com";

		Optional<HmsUser> doctor = hmsrpo.findById(2);

		assertEquals(doctor.get()
				.getEmail(), email);

	}

	@Test

	public void TestfailFindByPerson() {

		String name = "Vipul";

		String doctor = repo.findById(2)
				.get()
				.getName();

		assertEquals(name, doctor);


}
}
