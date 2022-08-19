package com.uteq.kiosko.controllers;


import com.uteq.kiosko.models.Alumno;
import com.uteq.kiosko.models.Alumnodto;
import com.uteq.kiosko.repo.AlumnoRepo;
import com.uteq.kiosko.repo.alumnodtoRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AlumnoController {
    @Autowired
    private AlumnoRepo alumnoRepo;

    @Autowired
    private alumnodtoRepo alumnodtoRepo;

    @RequestMapping(value = "api/alumnos" )
    public List<Alumno> getAlumnos() {

        return alumnoRepo.findAll();
    }

    @RequestMapping(value = "api/getalumnos")
    public List<Alumno> getAlumno(){
        return alumnoRepo.findAll();
    }

    @RequestMapping(value = "api/setalumnos", method = RequestMethod.POST)
    public Alumnodto alumno (@RequestBody Alumnodto alumnodto){
        Alumnodto resultAlumno = alumnodtoRepo.save(alumnodto);
        return resultAlumno;
    }

    @RequestMapping(value = "api/dealumnos/{id}", method = RequestMethod.DELETE)
    public void alumno (@PathVariable Long id){
        alumnoRepo.deleteById(id);
    }
}


