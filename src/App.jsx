import './App.css'
import CodeSnippet from './components/CodeSnippet'
import DateTimeCard from './components/DateTimeCard'
import Header from './components/Header'
import  './App.css'
import ArticleCard from './components/ArticleCard'
import NewHeader from './components/NewHeader'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import UserCard from './components/UserCard'
import PageLayout from './components/Layout/PageLayout'
import Sidebar from './components/Layout/Sidebar'
import ContentArea from './components/Layout/ContentArea'
import WeatherCard from './components/WeatherCard'

function App() {
  

  return (
    <>
      <WeatherCard city={"Zamość"} temperature={20} conditions={'sunny'} warning={"ZA DUŻA TEMPERATURA, PAMIĘTAĆ O NAWODNIENIU"}/>
    </>
  )
}

export default App
