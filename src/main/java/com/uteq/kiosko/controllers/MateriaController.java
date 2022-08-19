package com.uteq.kiosko.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.uteq.kiosko.models.Materia;
import com.uteq.kiosko.repo.MateriaRepo;

@RestController
public class MateriaController {

    @Autowired
    private MateriaRepo materiaRepo;

    @RequestMapping(value = "api/materia" )
    public List<Materia> getMaterias() {

        return materiaRepo.findAll();
    }

    @RequestMapping(value = "api/getmateria")
    public List<Materia> getMateria(){

        return materiaRepo.findAll();
    }

    @RequestMapping(value = "api/setmateria", method = RequestMethod.POST)
    public Materia mat (@RequestBody Materia materia){
        Materia resultado = materiaRepo.save(materia);
        return resultado;
    }

    @RequestMapping(value = "api/delmateria/{id}", method = RequestMethod.DELETE)
    public void mat(@PathVariable Long id){
        materiaRepo.deleteById(id);
    }
}