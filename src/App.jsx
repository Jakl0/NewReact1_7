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
import ProductImage from './components/ProductImage'
import Logo from "./assets/logofirmy.jpg"
import AvatarList from "./components/AvatarList"
function App() {
  

  return (
    <>
      <AvatarList users={[{name:"Justyna" , role:"nauczyciel" , id:4},{name:"Henryk" , role:"Reżyser" , id:2}]} />
    </>
  )
}

export default App
