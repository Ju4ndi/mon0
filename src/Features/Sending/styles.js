import styled from 'styled-components'
import { motion } from 'framer-motion'

const SendingStyled = styled(motion.div)`
    width: 100%;
    height: 109%;
    display: flex;
    text-align: center;
    align-items: center;
    color: var(--gray-300);
    background-size: cover;
    flex-direction: column;
    justify-content: center;
    background-repeat: no-repeat;
    background-color: var(--gray-300);
    border-radius: var(--border-radius-screen);
    
    img {
      width: 100%;
    }

    .bill {
      margin-left: 48%;
    }

    .container-photo {
      height: 78%;
      align-items: center;
      transform: scale(0.7);
    }

    .goForwardContainer {
      top: 1rem;
      width: 90%;
      height: 15%;
      display: flex;
      margin-left: 140%;
      position: absolute;
      justify-content: 100%;
      justify-content: right;
      justify-content: space-between;
    }

    .menu {
      width: 112%;
      height: 120%;
      transform: scale(0.9);
      background-color: var(--primary-300);
      border-radius: 3rem 3rem 0 0 ;
    
      .home {
        width: 40%;
        display: flex;
        margin-top: 4%;
        margin-left: 25%;
        align-items: center;
        align-content: center;
        justify-content: space-between;
      }
    }
`
export default SendingStyled
