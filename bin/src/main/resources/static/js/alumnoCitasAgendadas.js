console.log(sessionStorage.getItem('id'))

$.ajax({
    url:   'https://kioskouteq.azurewebsites.net/api/citas',
    type:  'post',
    beforeSend: function () {
        document.querySelector("table tbody").innerHTML = "Cargando citas...."
    },
    success:  function (response) {
        document.querySelector("table tbody").innerHTML = ""
            console.log(response)
            response.map((cita,index)=>{
                if(cita.alumno.matricula == sessionStorage.getItem('id')){
                    document.querySelector("table tbody").innerHTML += `
                    <tr>
                        <th scope="row">${cita.profesor.nombre}</th>
                        <td>${cita.fecha.substring(0,10)} ${cita.fecha.substring(11,16)}</td>
                        <td>Pendiente</td>
                    </tr>
                `
                }
            })
    },
    error : function(xhr, status) {
        document.querySelector("table tbody").innerHTML = "Hubo un error, intentalo mas tarde"
    },
    
});

