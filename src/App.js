import './App.css'
import GlobalStyles from './Styles'
import SignUp from './Features/SignUp'
import Sending from './Features/Sending'
import InitialScreen from './Features/InitialScreen'
import routesConstants from './Utils/Constants/routes'
// import PaymentDetails from './Features/PaymentDetails'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Container from './shared/Components/Container/index.jsx'
import ContextProvider from './Features/Dashboard/Context/Context'

function App() {
  return (
    <>
    <GlobalStyles />
      <Container>
        <ContextProvider>
          <BrowserRouter>
           <Routes>
            {/* <Route path={ routesConstants.cart } element={ <Cart /> } /> */}
            {/* <Route path={ routesConstants.signIn } element={ <SignIn /> } /> */}
            {/* <Route path={ routesConstants.popup } element={ <PopUp /> } /> */}
            <Route path={ routesConstants.signUp } element={ <SignUp /> } />
            {/* <Route path={ routesConstants.address } element={ <Address /> } /> */}
            <Route path={ routesConstants.sending } element={ <Sending /> } />
            {/* <Route path={ routesConstants.dashboard } element={ <Dashboard /> } /> */}
            {/* <Route path={ routesConstants.preparing } element={ <Preparing /> } /> */}
            {/* <Route path={ routesConstants.paymentdetails } element={ <PaymentDetails /> } /> */}
            <Route path={ routesConstants.initialScreen } element={ <InitialScreen /> } />
           </Routes>
          </BrowserRouter>
        </ContextProvider>
      </Container>
    </>
  )
}

export default App;
