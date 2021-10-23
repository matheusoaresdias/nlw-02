package proffy.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import proffy.model.Materia;

@Repository
public interface MateriaRepository extends JpaRepository<Materia, Long> {

}