import styled from 'styled-components'
import { motion } from 'framer-motion'

const AddressStyled = styled(motion.div)`
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
  font-style: Poppins;
	color: var(--gray-300);
	background-color: var(--primary-200);
	border-radius: var(--border-radius-screen);

	.goBackContainer {
		width: 12%;
		height: 16%;
		margin: 12%;
		cursor: pointer;
		background: #fff;
		align-self: center;
		border-radius: 0.9rem;
		justify-content: center;
		box-shadow: 0 0 1rem #00000050;
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
			font-weight: var(--regular);
		}

		form {
			width: 100%;
			gap: 0.8rem;
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.signIncontainer {
			p {
				font-size: 0.8rem;
			}

			span {
				cursor: pointer;
				font-weight: var(--semi);

				&:hover {
					opacity: 0.8;
				}
			}
		}
	}
`
export default AddressStyled
