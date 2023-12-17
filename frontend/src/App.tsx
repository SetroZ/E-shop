import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import { Route, Routes } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'
function App() {
  return (
    <>
      <Header />
      <main>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} />
            <Route path='/product/:productId' element={<ProductScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
