$(function(){
    var $registerForm = $("#formValidation");
    if($registerForm.length){
        $registerForm.validate({
            rules: {
                nombre: {
                    required: true
                },
                apellido: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                telefono: {
                    required: true,
                    digits: true
                },
                dirección: {
                    required: true
                },
                postal: {
                    required: true,
                    digits: true
                },
                mensaje: {
                    required: true
                }
            },
            messages: {
                nombre: {
                    required: 'Nombre es requerido'
                },
                apellido: {
                    required: 'Apellido es requerido'
                },
                email: {
                    required: 'Correo es requerido',
                    email: 'Ingrese un correo válido'
                },
                telefono: {
                    required: 'Teléfono es requerido',
                    digits: 'Solo se permiten números'
                },
                dirección: {
                    required: 'Dirección es requerida'
                },
                postal: {
                    required: 'Código postal es requerido',
                    digits: 'Solo se permiten números'
                },
                mensaje: {
                    required: 'Mensaje es requerido'
                }
            }
        });
    }
});