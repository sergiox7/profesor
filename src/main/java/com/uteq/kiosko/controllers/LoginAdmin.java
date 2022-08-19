package com.uteq.kiosko.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.uteq.kiosko.models.Admin;
import com.uteq.kiosko.repo.AdminRepo;

@RestController
public class LoginAdmin {
    @Autowired
    private AdminRepo adminRepo;

    @RequestMapping(value = "api/getAdmin")
    public List<Admin> pepito(){
        return adminRepo.findAll();
    }
}
