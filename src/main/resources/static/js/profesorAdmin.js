if (sessionStorage.getItem('id') == null) {
    location.href = "https://kioskouteq.azurewebsites.net/loginAdmin.html";
} else {

    pintarPagina()
    pintargrupo()
    pintarmateria()

    function pintarPagina() {
        document.getElementById('tabla').innerHTML = ""
        $.ajax({
            url: 'https://kioskouteq.azurewebsites.net/api/profesores',
            type: 'post',
            beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
            },
            success: function (response) {

                console.log(response)
                response.map((profesor, index) => {
                    document.getElementById('tabla').innerHTML +=
                        `
                        <tr>
                        <td>
                            ${profesor.id}
                        </td>
                        <td>
                            ${profesor.nombre}
                        </td>
                        <td>
                            ${profesor.ap1}
                        </td>
                        <td>
                            ${profesor.ap2}
                        </td>
                        <td>
                            ${profesor.correo}
                        </td>
                        <td>
                            ${profesor.password}
                        </td>
                        <td>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal2" onclick="llenarFormulario('${profesor.id}','${profesor.nombre}','${profesor.ap1}', '${profesor.ap2}','${profesor.correo}','${profesor.password}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal3" onclick="formularioEliminar('${profesor.id}','${profesor.nombre}')"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal4" onclick="FormulariomateriaGrupo('${profesor.id}','${profesor.nombre}')"><i class="fa-solid fa-check-double"></i></i></button>
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal5" onclick="FormulariomateriaGrupo('${profesor.id}','${profesor.nombre}')"><i class="fa-solid fa-magnifying-glass"></i></i></i></button>
                        </td>
                        </tr>
                        `
                })

            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });
    }


    function registrar() {
        var datos = {
            "nombre": document.getElementById('nombre').value,
            "ap1": document.getElementById('ap1').value,
            "ap2": document.getElementById('ap2').value,
            "correo": document.getElementById('correo').value,
            "password": document.getElementById('pass').value
        }
        datos = JSON.stringify(datos)

        $.ajax({
            contentType: "application/json",
            data: datos,
            dataType: "json",
            url: 'https://kioskouteq.azurewebsites.net/api/setprofesores',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                pintarPagina()
                limpiarRegistro()
                document.getElementById('cancelar').click()
            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });
    }

    function limpiarRegistro() {
        document.getElementById('nombre').value = ""
        document.getElementById('ap1').value = ""
        document.getElementById('ap2').value = ""
        document.getElementById('correo').value = ""
        document.getElementById('pass').value = ""

        document.getElementById('idE').value = ""
        document.getElementById('nombreE').value = ""
        document.getElementById('ap1E').value = ""
        document.getElementById('ap2E').value = ""
        document.getElementById('correoE').value = ""
        document.getElementById('passE').value = ""
    }

    function llenarFormulario(id, nombre, ap1, ap2, correo, pass) {
        document.getElementById('idE').value = id
        document.getElementById('nombreE').value = nombre
        document.getElementById('ap1E').value = ap1
        document.getElementById('ap2E').value = ap2
        document.getElementById('correoE').value = correo
        document.getElementById('passE').value = pass
        console.log(`${id} ${nombre} ${ap1} ${ap2} ${correo} ${pass}`)
    }

    function actualizar() {
        var datos = {
            "id": document.getElementById('idE').value,
            "nombre": document.getElementById('nombreE').value,
            "ap1": document.getElementById('ap1E').value,
            "ap2": document.getElementById('ap2E').value,
            "correo": document.getElementById('correoE').value,
            "password": document.getElementById('passE').value
        }
        datos = JSON.stringify(datos)

        $.ajax({
            contentType: "application/json",
            data: datos,
            dataType: "json",
            url: 'https://kioskouteq.azurewebsites.net/api/setprofesores',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                pintarPagina()
                limpiarRegistro()
                document.getElementById('cancelar2').click()
            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });
    }

    function formularioEliminar(id, nombre) {
        document.getElementById('profesorEliminar').innerHTML = `Id: ${id} Nombre ${nombre} `
        document.getElementById('idProfesor').value = id
    }

    function eliminar() {
        $.ajax({
            url: 'https://kioskouteq.azurewebsites.net/api/deprofesores/' + document.getElementById('idProfesor').value,
            type: 'delete',
            beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
            },
            success: function (response) {
                pintarPagina()
                document.getElementById('cancelar3').click()
            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });
    }

    function pintargrupo() {
        document.getElementById('tabla').innerHTML = ""
        $.ajax({
            url: 'https://kioskouteq.azurewebsites.net/api/grupo',
            type: 'post',
            beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
            },
            success: function (response) {

                console.log(response)
                response.map((grupo, index) => {
                    document.getElementById('grupo').innerHTML +=
                        `
                        <option value="${grupo.id}">
                            ${grupo.nombre}
                        </option>
                     
                        `
                })

            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
        });
    }

    function pintarmateria() {
        document.getElementById('materia').innerHTML = ""
        $.ajax({
            url: 'https://kioskouteq.azurewebsites.net/api/materia',
            type: 'post',
            beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
            },
            success: function (response) {

                console.log(response)
                response.map((materia, index) => {
                    document.getElementById('materia').innerHTML +=
                        `
                        <option value="${materia.id}">
                            ${materia.nombre}
                        </option>
                     
                        `
                })

            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
        });
    }

    function materiaGrupo(){
        document.getElementById("grupo").value
        document.getElementById("materia").value
        console.log(document.getElementById("grupo").value)
        console.log(document.getElementById("materia").value)
        console.log(document.getElementById("idP").value)

        var datos = {
            "id_profesor": document.getElementById('idP').value,
            "id_grupo": document.getElementById('grupo').value,
            "id_materia": document.getElementById('materia').value,
       
        }
        datos = JSON.stringify(datos)

        $.ajax({
            contentType: "application/json",
            data: datos,
            dataType: "json",
            url: 'https://kioskouteq.azurewebsites.net/api/Profe/Grupo/Materia',
            type: 'post',
            beforeSend: function () {
                $("#resultado").html("Procesando, espere por favor...");
            },
            success: function (response) {
                pintarPagina()
                limpiarRegistro()
                document.getElementById('cancelar2').click()
            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });

    }



    function FormulariomateriaGrupo(id,nombre){
        document.getElementById("nombreProfe").innerHTML = `${nombre}`
        document.getElementById("idP").value = id
    }
}