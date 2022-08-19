sessionStorage.removeItem('id');
function login(){
    var correo = document.getElementById('correo').value
    var password = document.getElementById('pass').value
    $.ajax({
        url:   'https://kioskouteq.azurewebsites.net/api/getAdmin',
        type:  'post',
        beforeSend: function () {
                $("#boton").html("Procesando, espere por favor...");
        },
        success:  function (response) {
            $("#resultado").html("Notificaciones");
                console.log(`${response[0].correo} ${response[0].password}`)
                if(response[0].correo == "admin" && response[0].password == "admin"){
                    sessionStorage.setItem('id', response[0].id);
                    location.href ="https://kioskouteq.azurewebsites.net/homeAdmin.html";
                }
        },
        error : function(xhr, status) {
            $("#resultado").html("Hubo un erro vuelve a intentar");
        },
        
    });
}