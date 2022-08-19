package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "profesorgrupomateria")
@ToString @EqualsAndHashCode
public class Profesorgrupomateria {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "id_profesor", nullable = false, updatable = false)
    private Profesor profesor;
    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "id_grupo", nullable = false, updatable = false)
    private Grupo grupo;
    @Getter
    @Setter
    @OneToOne
    @JoinColumn(name = "id_materia", nullable = false, updatable = false)
    private Materia materia;
}
