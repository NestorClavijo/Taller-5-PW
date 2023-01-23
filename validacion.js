const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombres: /^[a-zA-Z\s]{2,25}$/, // Letras y espacios, pueden llevar acentos.
    apellidos: /^[a-zA-ZÀ-ÿ\s]{2,25}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{15,20}$/, // 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombres: false,
    apellidos: false,
	password: false, 
	correo: false,
}

const validarformulario = (e) => {
	switch(e.target.name){
		case "inputnombre":
			validar(expresiones.nombres, e.target, 'inputnombre');
		break;
		case "inputapellido":
			validar(expresiones.apellidos, e.target, 'inputapellido');
		break;
        case "inputemail":
			validar(expresiones.correo, e.target, 'inputemail');
		break;
		case "Password":
			validar(expresiones.password, e.target, 'Password');
            validarPassword();
		break;
		case "inputPassword":
			validarPassword();
		break;
	}
}

const validar = (exp,input,id) =>{
	if(exp.test(input.value)){
        document.getElementById(`${id}Error`).classList.add('porDefecto');
		campos[id]=true;
	}else{
		document.getElementById(`${id}Error`).classList.remove('porDefecto');
		campos[id]=false;
	}
}

const validarPassword =() =>{
	const inputPassword = document.getElementById('Password') 
	const inputPassword2 = document.getElementById('inputPassword') 
	if(inputPassword.value!==inputPassword2.value){
		document.getElementById('inputPasswordError').classList.remove('porDefecto');
		campos['contraseñas']=false;
	}else{
		document.getElementById('inputPasswordError').classList.add('porDefecto');
		campos['contraseñas']=true;
	}

}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarformulario);
	input.addEventListener('blur', validarformulario);
})