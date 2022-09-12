import styled from 'styled-components'
import { motion } from 'framer-motion'

const PaymentDetailsStyled = styled(motion.div)`
    width: 100%;
    height: 109%;
    display: flex;
    overflow-y: auto;
    align-items: center;
    font-family: Poppins;
    flex-direction: column;
    color: var(--gray-100);
    justify-content: space-between;
    background-color: var(--gray-300);
    border-radius: var(--border-radius-screen);

    img {
      width: 50%;
    }
    
    .text {
      margin-top: -8rem;
    }
    
    .detail {
      color: #003760
    }
    
    .priceContainerTotal {
      font-size: 2rem;
    }
    
    .container-photo {
      top: -6rem;
      position: relative;
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
      top: 20%;
      width: 90%;
      height: 70%;
      text-align: center;
      position: relative;
      background: #E7EEF3;
      border-radius: 30px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    
      .listOne {
        gap: 1rem; 
        display: flex;
        color: #90A9BB;
        text-align: left;
        transform: scale(0.8);
        flex-direction: column;
      }
       
      .listTwo {
        gap: 0.5rem; 
        display: flex;
        color: #90A9BB;
        text-align: left;
        transform: scale(1);
        flex-direction: column;
      }
  
      .line {
        width: 80%;
        color: #90A9BB;
        margin-top: 30%;
        margin-left: 10%;
        border: 0.05rem dashed #90A9BB;
      }
  
      .price-details{
        display: flex;
        transform: scale(0.8);
        justify-content: space-between;
      }

      .priceContainer2 {
        width: 80%;
        display: flex;
        margin-top: 2%;
        margin-left: 10%;
        justify-content: space-between;
      }
  
    }
`
export default PaymentDetailsStyled
  