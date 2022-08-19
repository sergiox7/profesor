if(sessionStorage.getItem('id') == null){
    location.href ="https://kioskouteq.azurewebsites.net/loginAdmin.html";
}else{

    pintarPagina()
    pintargrupo()

    function pintarPagina(){
        document.getElementById('tabla').innerHTML = ""
        $.ajax({
            url:   'https://kioskouteq.azurewebsites.net/api/alumnos',
            type:  'post',
            beforeSend: function () {
                    $("#boton").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                
                    console.log(response)
                    response.map((alumno,index)=>{
                        document.getElementById('tabla').innerHTML += 
                        `
                        <tr>
                        <td>
                            ${alumno.matricula}
                        </td>
                        <td>
                            ${alumno.nombre}
                        </td>
                        <td>
                            ${alumno.ap1}
                        </td>
                        <td>
                            ${alumno.ap2}
                        </td>
                        <td>
                            ${alumno.correo}
                        </td>
                        <td>
                            ${alumno.password}
                        </td>
                        
                        <td>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal2" onclick="llenarFormulario('${alumno.matricula}','${alumno.nombre}','${alumno.ap1}', '${alumno.ap2}','${alumno.correo}','${alumno.password}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal3" onclick="formularioEliminar('${alumno.matricula}','${alumno.nombre}')"><i class="fa-solid fa-trash"></i></button>
                            <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#myModal4" onclick="FormulariomateriaGrupo()"><i class="fa-solid fa-check-double"></i></i></button>
                            <button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#myModal5" onclick="FormulariomateriaGrupo()"><i class="fa-solid fa-magnifying-glass"></i></i></i></button>
                        </td>
                        </tr>
                        `
                    })
                    
            },
            error : function(xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
            
        });
    }
    

    function registrar(){
        var datos = {
            "nombre": document.getElementById('nombre').value,
            "ap1": document.getElementById('ap1').value,
            "ap2": document.getElementById('ap2').value,
            "correo": document.getElementById('correo').value,
            "password": document.getElementById('pass').value,
            
        }
        datos = JSON.stringify(datos)
      
        $.ajax({
            contentType: "application/json",
            data:  datos,
            dataType: "json",
            url:   'https://kioskouteq.azurewebsites.net/api/setalumnos',
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
        document.getElementById('nombre').value = ""
        document.getElementById('ap1').value = ""
        document.getElementById('ap2').value = ""
        document.getElementById('correo').value = ""
        document.getElementById('pass').value = ""

        document.getElementById('matriculaE').value = ""
        document.getElementById('nombreE').value = ""
        document.getElementById('ap1E').value = ""
        document.getElementById('ap2E').value = ""
        document.getElementById('correoE').value = ""
        document.getElementById('passE').value = ""
    }

    function llenarFormulario(matricula,nombre,ap1,ap2,correo,pass){
        document.getElementById('matriculaE').value = matricula
        document.getElementById('nombreE').value = nombre
        document.getElementById('ap1E').value = ap1
        document.getElementById('ap2E').value = ap2
        document.getElementById('correoE').value = correo
        document.getElementById('passE').value = pass
        console.log(`${matricula} ${nombre} ${ap1} ${ap2} ${correo} ${pass}`)
    }

    function actualizar(){
        var datos = {
            "matricula": document.getElementById('matriculaE').value,
            "nombre": document.getElementById('nombreE').value,
            "ap1": document.getElementById('ap1E').value,
            "ap2": document.getElementById('ap2E').value,
            "correo": document.getElementById('correoE').value,
            "password": document.getElementById('passE').value
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

    function formularioEliminar(matricula,nombre){
        document.getElementById('AlumnoEliminar').innerHTML = `Id: ${matricula} Nombre ${nombre} `
        document.getElementById('matriculaAlumno').value = matricula
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

    function pintargrupo(){
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

}