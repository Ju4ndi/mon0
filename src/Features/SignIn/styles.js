import styled from 'styled-components'
import { motion } from 'framer-motion'

const SignInStyled = styled(motion.div)`
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
	color: var(--gray-300);
	background-color: var(--primary-200);
	border-radius: var(--border-radius-screen);


	.goBackContainer {
		width: 90%;
		display: flex;
		margin: 0 auto;
		justify-content: left;
	}

	.formContainer {
		width: 80%;
		display: flex;
		margin: 0 auto;
		align-items: center;
		flex-direction: column;
		justify-content: center;
    
		h3 {
      font-size: var(--h3);
			font-weight: var(--small);
		}
    
		form {
      gap: 0.8rem;
			width: 130%;
			display: flex;
			align-items: center;
      transform: scale(0.8); 
			flex-direction: column;
		}

		.signUpcontainer {
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
export default SignInStyled
