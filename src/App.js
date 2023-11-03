// App.js

import React from 'react';
import Navbar from './Components/Navbar';
import Features from './Components/Features';
import Organization from 'Components/Organization';
import Prototyping from 'Components/Prototyping';
import DesktopBg from './assets/DesktopBg.png'
import Patners from 'Components/Patners';
import Testmonials from 'Components/Testmonials';
import Pricing from 'Components/Pricing';
import Contact from 'Components/Contact';
import Footer from 'Components/Footer';

import Vector2 from './assets/Vector2.png';
import Feature_style from './assets/feature_style.png';
import Mdi_brush from './assets/mdi_brush.png';

function App() {
  const featuresArray = [
    {
      imageUrl : Vector2, 
      head: "OpenType features Variable fonts",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      imageUrl : Feature_style, 
      head: "Design with real data",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
    {
      imageUrl : Mdi_brush, 
      head: "Fastest way to take action",
      description: "Slate helps you see how many more days you need to work to reach your financial goal."
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="bg-cover w-full h-full bg-center text-white"
    style={{ backgroundImage: `url(${DesktopBg})` }}>
      <div className='flex flex-col md:flex-row'>
      {featuresArray.map((item, index) => (
        <Features 
          key={index} 
          imageUrl={item.imageUrl}
          head={item.head} 
          description={item.description} 
        />
      ))}
      </div>
      <Organization />
      <Prototyping />
      <Patners />
      <Testmonials />
      <Pricing />
      <Contact />
      <div className=''>
      <Footer />
      </div>
      </div>
    </div>
  );
}

export default App;
