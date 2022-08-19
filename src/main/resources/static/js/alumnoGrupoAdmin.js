if (sessionStorage.getItem('id') == null) {
    location.href = "https://kioskouteq.azurewebsites.net/loginAdmin.html";
} else {

    pintarPagina()

    function pintarPagina() {
        document.getElementById('tabla').innerHTML = ""
        $.ajax({
            url: 'https://kioskouteq.azurewebsites.net/api/alumnos',
            type: 'post',
            beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
            },
            success: function (response) {

                console.log(response)
                response.map((alumno, index) => {
                    document.getElementById('Select').innerHTML +=
                        `
                        <select class="form-select" id="Select">
                        <option>
                        ${alumno.id_grupo}
                        </option>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal2" onclick="llenarFormulario('${alumno.id_grupo}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal3" onclick="formularioEliminar('${alumno.id_grupo}')"><i class="fa-solid fa-trash"></i></button>
                        </select>
                        `
                })

            },
            error: function (xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },

        });
    }

    function registrar(){
        var datos = {
            "id_grupo": document.getElementById('id_grupo').value,
        }
        datos = JSON.stringify(datos)
      
        $.ajax({
            contentType: "application/json",
            data:  datos,
            dataType: "json",
            url:   'https://kioskouteq.azurewebsites.net/api/setAlumnos',
            type:  'post',
            beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                pintarPagina() 
                limpiarRegistro()
                document.getElementById('cancelar').click()   
            },
            error : function(xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
            
        });
    }

    function limpiarRegistro(){
        document.getElementById('id_grupo').value = ""

        document.getElementById('id_grupoE').value = ""
    }

    function llenarFormulario(id_grupo){
        document.getElementById('id_grupoE').value = id_grupo

        console.log(`${id_grupo}`)
    }

    function actualizar(){
        var datos = {
            "id_gruupo": document.getElementById('id_grupoE').value,
        }
        datos = JSON.stringify(datos)
      
        $.ajax({
            contentType: "application/json",
            data:  datos,
            dataType: "json",
            url:   'https://kioskouteq.azurewebsites.net/api/setAlumnos',
            type:  'post',
            beforeSend: function () {
                    $("#resultado").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                pintarPagina() 
                limpiarRegistro()
                document.getElementById('cancelar2').click()   
            },
            error : function(xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
            
        });
    }

    function formularioEliminar(id_grupo){
        document.getElementById('Id_Grupo').innerHTML = `Id_grupo: ${id_grupo} `
    }

    function eliminar(){
        $.ajax({
            url:   'https://kioskouteq.azurewebsites.net/api/delalumnos/'+document.getElementById('matriculaAlumno').value,
            type:  'delete',
            beforeSend: function () {
                    $("#boton").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                pintarPagina()
                document.getElementById('cancelar3').click()
            },
            error : function(xhr, status) {
                $("#resultado").html("Hubo un error vuelve a intentar");
            },
            
        });
    }
}
