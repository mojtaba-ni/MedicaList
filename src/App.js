import React from 'react'
import { motion } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop';
import About from './sections/About';
import Blogs from './sections/Blogs';
import Starter from './sections/Starter';
import Testimonial from './sections/Testimonials'
import Why from './sections/Why'


function App() {
  return (
    <motion.div initial="hidden" animate="show" className="App">
      <ScrollToTop/>
      <Starter/>
      <About/>
      <Why/>
      <Testimonial/>
      <Blogs/>
    </motion.div>
  );
}

export default App;
