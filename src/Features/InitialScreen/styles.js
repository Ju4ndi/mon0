import styled from 'styled-components'
import { motion } from 'framer-motion'

const InitialStyled = styled(motion.div)`
  width: 100%;
	height: 100%;
	display: flex;
	text-align: center;
	align-items: center;
	color: var(--gray-300);
  background-size: cover;
	flex-direction: column;
	justify-content: center;
	background-repeat: no-repeat;
	background-color: var(--primary-200);
	border-radius: var(--border-radius-screen);

	img {
		width: 12rem;
	}

	p {
		width: 70%;
		font-size: 1.1rem;
	}
`
export default InitialStyled
