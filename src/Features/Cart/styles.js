import styled from 'styled-components'
import { motion } from 'framer-motion'

const CartStyled = styled(motion.div)`
	width: 100%;
	height: 100%;
	text-align: center;
	align-items: center;
	justify-content: 100%;
	color: var(--primary-100);
	background-color: var(--gray-300);
	border-radius: var(--border-radius-screen);

  img {
    width: 9%;
  }

	.goBackContainer {
		width: 90%;
    height: 10%;
		display: flex;
		margin-left: 10%;
	}
  
  .list {
    gap: 1rem;
    width: 150%;
    color: black;
    display: flex;
		margin: 0 auto;
    display-flex: rows;
    margin-left: -3rem;
    transform: scale(0.7);
		flex-direction: column;
    justify-content: space-between;
  }

	.cartList {
    width: 90%;
    height: 80%;
		display: flex;
		margin: 0 auto;
		align-items: center;
		flex-direction: column;
		justify-content: center;
    
		.title {
      width: 100%;
			display: flex;
      margin-left: -3rem;
      transform: scale(0.8);
			justify-content: flex-start;

			h5 {
				font-size: var(--h4);
				font-weight: var(--small);
			}
		}

  .itemsContainer {
    gap: 1rem;
    width: 100%;
    height: 90%;
    display: flex;
    overflow-y: scroll;
    padding: 1rem 0.4rem;
    flex-direction: column;
  }
 
  .priceContainer {
    gap: 5;
    width: 75%;
    color: gray;
    display: flex;
    justify-content: space-between;

    p {
      font-size: var(--s-normal);
    }

    .price {
      color: black;
      font-size: var(--s-medium);
    }
  }

  .priceContainer2 {
    width: 75%;
    display: flex;
    justify-content: space-between;
    font: bold;

    p {
      font-size: var(--s-medium);
    }

    .price {
      font-weight: var(--bold);
      font-size: var(--s-medium);
      color: #ff7f26;
    }
  }
    
  .address {
    width: 100%;
    color: black;
    height: 3%;
    display: flex;
    margin-left: -4rem;
    transform: scale(0.8);
  }

  
  .titlee {
    color: black;
    margin-left: 2.7%;
  }
    
  .underline {
		width: 100%;
    height: 0.9%;
	  background-color: #EBEBEB;
  }

  .container-text {
    width: 98%;
    display:flex;
    color: black;
    margin-left: 10%;
    transform: scale(0.9);
    justify-content: space-between;
    text-align: start;
    
  
  .color-address {
    color: #ff7f26;
    cursor: pointer;
    text-align: end;
    font-weight: var(--semi);
    justify-content: space-between;
  }
}

  .box {
    display:flex;
    margin-left: 1%;
    font-size: Poppins;
    transform: scale(1);
    flex-direction: row;
    font-size: var(--s-small);
    justify-content: space-between;
  }
    
	}
`
export default CartStyled