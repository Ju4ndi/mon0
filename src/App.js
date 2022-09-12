import './App.css'
import GlobalStyles from './Styles'
import Container from './shared/Components/Container/index.jsx'
import ContextProvider from './Features/Dashboard/Context/Context'

function App() {
  return (
    <>
    <GlobalStyles />
      <Container>
      <ContextProvider>

      </ContextProvider>
      </Container>
    </>
  )
}

export default App;
