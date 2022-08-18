package net.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Passengerr;
import net.javaguides.springboot.repository.PassengerrRepository;

//@CrossOrigin(origins="http:/localhost:8080")
@RestController
@RequestMapping("/api/v1/")
public class PassengerrController {
	@Autowired
	private PassengerrRepository passengerrRepository;
	
	//get all passengers
	
	@GetMapping("/passengerrs")
	public List<Passengerr> getAllPassengerrs(){return passengerrRepository.findAll();
	}
	//create 
	@PostMapping("/passengerrs")
	public Passengerr createPassengerr(@RequestBody	 Passengerr passengerr)
	{
		return passengerrRepository.save(passengerr);
	}
	
	//get passengerr by id rest api
	@GetMapping("/passengerrs/{pid}")
	public ResponseEntity<Passengerr> getPassengerrById(@PathVariable Long pid) {
		
		Passengerr passengerr=passengerrRepository.findById(pid)
				.orElseThrow(()->new ResourceNotFoundException("Yolcu Bulunamadı"+pid));
		return ResponseEntity.ok(passengerr);
	}
	
	//updatePassengerr rest 
	@PutMapping("/passengerrs/{pid}")
	public ResponseEntity<Passengerr> updatePassengerr(@PathVariable Long pid, @RequestBody Passengerr passengerrDetails){
		
		Passengerr passengerr=passengerrRepository.findById(pid)
				.orElseThrow(()->new ResourceNotFoundException("Yolcu Bulunamadı"+pid));
		
		passengerr.setPName(passengerrDetails.getPName());
		passengerr.setlast(passengerrDetails.getlast());
		passengerr.setPNat(passengerrDetails.getPNat());
		passengerr.setPGen(passengerrDetails.getPGen());
		passengerr.setPPass(passengerrDetails.getPPass());
		passengerr.setPAdd(passengerrDetails.getPAdd());
		passengerr.setPphone(passengerrDetails.getPphone());
		
		Passengerr updatedPassengerr= passengerrRepository.save(passengerr);
		
		return ResponseEntity.ok(updatedPassengerr);
	}
	
	@DeleteMapping("/passengerrs/{pid}")
	public ResponseEntity<Map<String,Boolean>> deletePassengerr(@PathVariable Long pid){
		Passengerr passengerr=passengerrRepository.findById(pid)
				.orElseThrow(()->new ResourceNotFoundException("Yolcu Bulunamadı"+pid));
		passengerrRepository.delete(passengerr);
		Map<String,Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
		
	}
	
	
}
	
	
	
	
	
	
	
	

