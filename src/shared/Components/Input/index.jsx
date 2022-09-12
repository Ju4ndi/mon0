import Spacer from '../Spacer'
import React from 'react'
import InputStyled from './styles'

function Input({ err, data, register, required = true }) {
	const error = err[data.name]

	return (
		<InputStyled error={ error }>
			<span>{ data.placeholder }</span>
			<Spacer height='0.1rem' />
			<label className='inputContainer'>
				<input autoComplete='none' placeholder={ data.placeholder } type={ data.type } maxLength={ data.maxLength }
					{ ...register(data.name, {
						required: {
							value: required,
							message: data.requireMessage
						},
						maxLength: data.maxLength,
						pattern: {
							value: data.pattern,
							message: data.patternMessage
						}
					}) }
				/>
			</label>
			<p className='warningText'>
				{ error && (error?.message || 'The field is incorrect.') }
			</p>
		</InputStyled>
	)
}
export default Input
