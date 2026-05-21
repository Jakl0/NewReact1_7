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

function App() {
  

  return (
    <>
      <UserCard 
      name={"Zbigniew"} 
      role={"Doradca od spraw zagranicznych"} 
      avatarUrl={"https://avatars.worldcubeassociation.org/xr297r4x42kmvurwyfrx18xrgl34"} 
      isOnline={true}/>
    <hr/>
      <UserCard 
      name={"Marcin"} 
      role={"Rozgrywający"} 
      avatarUrl={"https://lkpslublin.pl/wp-content/uploads/2026/03/4_Komenda-555x833.jpeg"} 
      isOnline={false}/>
      <hr/>
      <UserCard 
      name={"Leon"} 
      role={"Przyjmujący"} 
      avatarUrl={"https://lkpslublin.pl/wp-content/uploads/2026/03/9_Leon-555x833.jpeg"} 
      isOnline={true}/>
    </>
  )
}

export default App
