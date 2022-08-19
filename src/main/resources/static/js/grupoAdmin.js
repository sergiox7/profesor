if(sessionStorage.getItem('id') == null){
    location.href ="https://kioskouteq.azurewebsites.net/loginAdmin.html";
}else{

    pintarPagina()

    function pintarPagina(){
        document.getElementById('tabla').innerHTML = ""
        $.ajax({
            url:   'https://kioskouteq.azurewebsites.net/api/grupo',
            type:  'post',
            beforeSend: function () {
                    $("#boton").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                
                    console.log(response)
                    response.map((grupo,index)=>{
                        document.getElementById('tabla').innerHTML += 
                        `
                        <tr>
                        <td>
                            ${grupo.id}
                        </td>
                        <td>
                            ${grupo.nombre}
                        </td>
                        <td>
                            <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#myModal2" onclick="llenarFormulario('${grupo.id}','${grupo.nombre}')"><i class="fa-solid fa-pen-to-square"></i></button>
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#myModal3" onclick="formularioEliminar('${grupo.id}','${grupo.nombre}')"><i class="fa-solid fa-trash"></i></button>
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
            "nombre": document.getElementById('nombre').value
        }
        datos = JSON.stringify(datos)
      
        $.ajax({
            contentType: "application/json",
            data:  datos,
            dataType: "json",
            url:   'https://kioskouteq.azurewebsites.net/api/setgrupo',
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

        document.getElementById('idE').value = ""
        document.getElementById('nombreE').value = nombre
    
    }

    function llenarFormulario(id,nombre){
        document.getElementById('idE').value = id
        document.getElementById('nombreE').value = nombre

        console.log(`${id} ${nombre}`)
    }

    function actualizar(){
        var datos = {
            "id": document.getElementById('idE').value,
            "nombre": document.getElementById('nombreE').value
        }
        datos = JSON.stringify(datos)
      
        $.ajax({
            contentType: "application/json",
            data:  datos,
            dataType: "json",
            url:   'https://kioskouteq.azurewebsites.net/api/setgrupo',
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

    function formularioEliminar(id,nombre){
        document.getElementById('grupoEliminar').innerHTML = `Id: ${id} Nombre ${nombre} `
        document.getElementById('idGrupo').value = id
    }

    function eliminar(){
        $.ajax({
            url:   'https://kioskouteq.azurewebsites.net/api/delgrupo/'+document.getElementById('idGrupo').value,
            type:  'delete',
            beforeSend: function () {
                    $("#boton").html("Procesando, espere por favor...");
            },
            success:  function (response) {
                pintarPagina()
                document.getElementById('cancelar3').click()
            },
            error : function(xhr, status) {
                $("#resultado").html("Hubo un erro vuelve a intentar");
            },
            
        });
    }

}
