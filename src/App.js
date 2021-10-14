import React from 'react';
import { 
  Route, 
  Switch,
  useLocation
} from 'react-router-dom'
import Main from './components/Main'
import Contact from './components/Contact'
import Services from './components/Services'
import Header from './components/Header';
import Footer from './components/Footer'
import { AnimatePresence } from 'framer-motion'
import './App.css'
import sample from './assets/cleaning-video.mp4' 

function App() {

  const location = useLocation();

  return (
    <div className='appbody'>
      <Header />

      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path='/' component={Main} exact/>
          <Route path='/services' component={Services} exact/>
          <Route path='/contact' component={Contact} exact/>
        </Switch>
      </AnimatePresence>

      <Footer />

      <video 
        className='videoBackground' 
        poster='./assets/thumbnail-big.jpg'
        autoPlay 
        loop 
        muted>
        <source src={sample} type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
