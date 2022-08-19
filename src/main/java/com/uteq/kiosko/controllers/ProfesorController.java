package com.uteq.kiosko.controllers;


import com.uteq.kiosko.models.Grupo;
import com.uteq.kiosko.models.Profesor;
import com.uteq.kiosko.models.Profesorgrupomateria;
import com.uteq.kiosko.models.profesorgrupomateriadto;
import com.uteq.kiosko.repo.GrupoRepo;
import com.uteq.kiosko.repo.ProfesorGrupoMateriaRepo;
import com.uteq.kiosko.repo.ProfesorRepo;
import com.uteq.kiosko.repo.ProfesormateriagrupodtoRepo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProfesorController {
    @Autowired
    private ProfesorRepo profesorRepo;

    @Autowired
    private GrupoRepo grupoRepo;

    @Autowired
    private ProfesormateriagrupodtoRepo profesormateriagrupodtoRepo;

    @Autowired
    private ProfesorGrupoMateriaRepo profesorGrupoMateriaRepo;

    @RequestMapping(value = "api/profesores" )
    public List<Profesor> getProfesores() {

        return profesorRepo.findAll();
    }

    @RequestMapping(value = "api/getprofesores")
    public List<Profesor> getProfesor(){
        return profesorRepo.findAll();
    }

    @RequestMapping(value = "api/setprofesores", method = RequestMethod.POST)
    public Profesor prof (@RequestBody Profesor profesor){
        Profesor resultProfesor = profesorRepo.save(profesor);
        return resultProfesor;
    }

    @RequestMapping(value = "api/deprofesores/{id}", method = RequestMethod.DELETE)
    public void prof (@PathVariable Long id){
        profesorRepo.deleteById(id);
    }

    @RequestMapping(value = "api/Profe/Grupo/Materia", method = RequestMethod.POST)
    public profesorgrupomateriadto pgm (@RequestBody profesorgrupomateriadto profesorgrupomateriadto){
        profesorgrupomateriadto resultProfesor = profesormateriagrupodtoRepo.save(profesorgrupomateriadto);
        return resultProfesor;
    }

    @RequestMapping(value = "api/ProfGrupMat", method = RequestMethod.GET)
    public List<Profesorgrupomateria> profMatGrup(){
        return profesorGrupoMateriaRepo.findAll();
    }  

    
}
