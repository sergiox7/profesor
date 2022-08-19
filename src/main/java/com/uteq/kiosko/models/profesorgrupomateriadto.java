package com.uteq.kiosko.models;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
@Entity
@Table(name = "profesorgrupomateria")
@ToString @EqualsAndHashCode
public class profesorgrupomateriadto {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "id")
    private Long id;
    @Getter
    @Setter
    @Column(name = "id_profesor")
    private Long id_profesor;
    @Getter
    @Setter
    @Column(name = "id_grupo")
    private Long id_grupo;
    @Getter
    @Setter
    @Column(name = "id_materia")
    private Long id_materia;
}