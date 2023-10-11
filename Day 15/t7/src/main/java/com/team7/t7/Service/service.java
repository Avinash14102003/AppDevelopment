package com.team7.t7.Service;




import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.team7.t7.Entity.Bookmystay;
import com.team7.t7.Repository.repository;


@Service
public class service {

	@Autowired
	repository bookmystayRepository;
	
	public List<Bookmystay> getAllBookmystay() {
		return bookmystayRepository.findAll();
	}
	
	public Bookmystay getbookmystayById(Long bookmystayId) {
		Optional<Bookmystay> bookmystayOptional = bookmystayRepository.findById(bookmystayId);
		return bookmystayOptional.orElse(null);
	}
	
	public Bookmystay savebookmystay(Bookmystay bookmystay) {
		return bookmystayRepository.save(bookmystay);
	}
	
	public void deletebookmystay(Long bookmystayId) {
	    bookmystayRepository.deleteById(bookmystayId);
	}
}