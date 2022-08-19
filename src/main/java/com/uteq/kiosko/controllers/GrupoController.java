package com.uteq.kiosko.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.uteq.kiosko.models.Grupodto;
import com.uteq.kiosko.repo.GrupodtoRepo;

@RestController
public class GrupoController {

    @Autowired
    private GrupodtoRepo grupodtoRepo;

    @RequestMapping(value = "api/grupo")
    public List<Grupodto> getGruposdto(){
        return grupodtoRepo.findAll();
    }

    @RequestMapping(value = "api/getgrupo")
    public List<Grupodto> getGrupodto(){
        return grupodtoRepo.findAll();
    }

    @RequestMapping(value = "api/setgrupo", method = RequestMethod.POST)
    public Grupodto grup (@RequestBody Grupodto grupo){
        Grupodto resultado = grupodtoRepo.save(grupo);
        return resultado;
    }

    @RequestMapping(value = "api/delgrupo/{id}", method = RequestMethod.DELETE)
    public void grup(@PathVariable Long id){
        grupodtoRepo.deleteById(id);
    }
   

    
}
