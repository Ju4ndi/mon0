import styled from 'styled-components'

export const MenuStyled = styled.div`
  left: 5%;
	width: 85%;
	margin-top: 3%;
	position: relative;
	transform: scale(1);

	.slider {
		width: 100%;
	}

	&:before {
	left: 2%;
	top: 30%;
	width: 100%;
  height: 40%;
	content: '';
	position: absolute;
	border-radius: 3rem;
	background-color: var(--primary-200);
	box-shadow: 0 0.2rem 0.2rem #00000050;
	}
`

export const MenuItemStyled = styled.div`
	width: 80%;
	display: flex;
	cursor: pointer;
	position: relative;
	align-items: center;
	flex-direction: column;

	img {
		width: 50%;
		height: 50%;
		object-fit: cover;
		filter: ${({ focus }) => (focus ? 'contrast(1.4)' : 'none')};
	}

	&:hover {
		p {
			background-color: var(--secondary-100);
		}
    
		img {
			filter: contrast(1.4);
		}
	}
`
