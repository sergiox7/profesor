package com.uteq.kiosko.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.uteq.kiosko.models.Admin;

public interface AdminRepo extends JpaRepository<Admin, Long> {
    
}
