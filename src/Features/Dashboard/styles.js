import styled from 'styled-components'
import { motion } from 'framer-motion'

const DashboardStyled = styled(motion.div)`
    width: 100%;
    height: 100%;
    display: flex;
    overflow-y: auto;
    align-items: center;
    font-family: Poppins;
    color: var(--gray-100);
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--gray-300);
    border-radius: var(--border-radius-screen);
  
    .button {
      margin-top: 5%;
    }

  .itemsContainer {
    margin-top: -12%;
    height: 40%;
    width: 100%;
    transform: scale(0.74);
  }

  .selectElementContainer {
    height: 230%;
    width: 130%;
    display: flex;
    overflow-y: auto;
    margin-left: -15%;
    align-items: center;
    transform: scale(0.74);
    flex-direction: column;
    justify-content: space-between;
	}

  .menu {
    height: 35%;
    width: 100%;
    flex-direction: column;
		background-color: var(--primary-300);
		border-radius: 3rem 3rem 0 0 ;
  }

    .detail {
      font-weight: 800;
      margin-top: 10%;
      text-align: center;
      transform: scale(1);
    }

    .details {
    font-weight: 100;
    margin-top: 5%;
    text-align: center;
    transform: scale(0.9);
    }
`
export default DashboardStyled
