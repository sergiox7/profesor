package com.uteq.kiosko.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uteq.kiosko.models.Materia;


public interface MateriaRepo extends JpaRepository<Materia, Long>{
    
}
