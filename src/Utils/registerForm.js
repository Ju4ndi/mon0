const registerInputData = {}

registerInputData.name = {
	name: 'name',
	maxLength: 100,
	pattern: /^[a-zA-ZÀ-ÿ ]{1,100}$/,
	patternMessage: 'Nombre invalido',
	placeholder: 'Nombre Completo',
	requireMessage: 'El nombre es requerido',
	type: 'text'
}
registerInputData.email = {
	name: 'email',
	maxLength: 100,
	pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	patternMessage: 'Email inválido',
	placeholder: 'Correo Electrónico',
	requireMessage: 'Se requiere el correo',
	type: 'email'
}
registerInputData.address = {
	name: 'address',
	maxLength: 60,
	pattern: /^[A-Za-z0-9 #-]*$/,
	patternMessage: 'Dirección inválida',
	placeholder: 'Dirección de Entrega',
	requireMessage: 'La dirección es requerida',
	type: 'text'
}
registerInputData.phone_number = {
	name: 'phoneNumber',
	maxLength: 10,
	pattern: /^[0-9]{7,10}$/,
	patternMessage: 'El Número es invalido',
	placeholder: 'Número Celular ',
	requireMessage: 'El número de celular es requerido',
	type: 'number'
}
registerInputData.password = {
	name: 'password',
	maxLength: 16,
	// pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,16}$/,
	patternMessage: 'Contraseña inválida',
	placeholder: 'Contraseña',
	requireMessage: 'Contraseña es requerida',

	// Debe tener un tamaño mínimo de 8 caracteres y un máximo de 15, además debe contener como mínimo una mayúscula, minúscula, número y un carácter especial.
	type: 'password'
}

export default { registerInputData }
