import styled from 'styled-components'

const PopUpStyled = styled.div`
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
		width: 100%;
	}

	.container-photo {
		align-items: center;
		transform: scale(0.9);

		.home {
			align-items: center;
			margin-left: 10rem;
		}
	}

	body{
    filter: blur(6px);
}
`
export default PopUpStyled
