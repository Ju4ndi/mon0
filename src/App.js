import './App.css'
import GlobalStyles from './Styles'
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
          
          </BrowserRouter>
        </ContextProvider>
      </Container>
    </>
  )
}

export default App;
