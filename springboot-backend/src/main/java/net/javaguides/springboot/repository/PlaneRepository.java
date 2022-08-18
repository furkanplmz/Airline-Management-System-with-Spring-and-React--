package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import net.javaguides.springboot.model.Plane;

@Repository
public interface PlaneRepository extends JpaRepository<Plane, Long>{

}
