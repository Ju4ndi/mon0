const signInInputData = {}

signInInputData.email = {
	name: 'email',
	maxLength: 100,
	pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	patternMessage: 'Correo inválido',
	placeholder: 'Correo',
	requireMessage: 'Campo vacío',
	type: 'email'
}

signInInputData.password = {
	name: 'password',
	maxLength: null,
	pattern: '',
	patternMessage: 'Contraseña inválida',
	placeholder: 'Contraseña',
	requireMessage: 'Campo vacío',
	type: 'password'
}

export default { signInInputData }
