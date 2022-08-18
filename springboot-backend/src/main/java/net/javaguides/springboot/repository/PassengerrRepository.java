package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Passengerr;

@Repository
public interface PassengerrRepository extends JpaRepository<Passengerr, Long>{

}
