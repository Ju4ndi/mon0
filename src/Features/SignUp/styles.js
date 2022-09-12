import styled from 'styled-components'
import { motion } from 'framer-motion'

const SignUpStyled = styled(motion.div)`
    font-style: Poppins;
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
	color: var(--gray-300);
	background-color: var(--primary-200);
	border-radius: var(--border-radius-screen);

	.formContainer {
		width: 80%;
		display: flex;
		margin: 0 auto;
		align-items: center;
		flex-direction: column;
		justify-content: center;
    
		h3 {
			font-size: var(--h3);
			font-weight: var(--regular);
		}

		form {
      width: 130%;
			gap: 0.3rem;
			display: flex;
			align-items: center;
      transform: scale(0.8); 
			flex-direction: column;
		}

		.signIncontainer {
			p {
				font-size: 0.7rem;
			}

			span {
        color: orange;
				cursor: pointer;
				font-weight: var(--semi);

				&:hover {
					opacity: 0.8;
				}
			}

		}
	}
`
export default SignUpStyled
