import './App.css'
import GlobalStyles from './Styles'
import InitialScreen from './Features/InitialScreen'
import routesConstants from './Utils/Constants/routes'
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
            <Route path={ routesConstants.initialScreen } element={ <InitialScreen /> } />
           </Routes>
          </BrowserRouter>
        </ContextProvider>
      </Container>
    </>
  )
}

export default App;
