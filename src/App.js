import './index.css';
import Hero from './Components/Hero';
import Nav from './Components/Nav';
import AboutMe from './Components/AboutMe'
import Blog from './Components/Blog'
import { Route,Routes } from 'react-router-dom';
import FaveProducts from './Components/FaveProducts';
import Footer from './Components/Footer';
import NotFoundPage from './Components/NotFoundPage';
import ArticleSinglePage from './Components/ArticleSinglePage';


function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Hero />}/>
        <Route path="/aboutme" element={<AboutMe />}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/products" element={<FaveProducts/>}/>
        <Route path="/*" element={<NotFoundPage/>}/>
        <Route path="/blog/:name" element={<ArticleSinglePage/>}/> 
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
