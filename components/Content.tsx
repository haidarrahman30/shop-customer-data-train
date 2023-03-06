import React from 'react';
import Card from './Card';
import CardTotal from './CardTotal';
import Header from './Header';
import Hero from './HeroSection';

function Content() {
  return (
    <div className="flex-1 h-screen p-7 bg-light">
        <Hero><Header title="Dashboard Page" /></Hero>
        
        {/* Card Dashboard Example */}
        <div className="flex flex-nowrap lg:flex-nowrap sm:flex-wrap gap-3 mt-8 w-full">
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' /> 
        </div>

        <div className="flex gap-8 flex-nowrap lg:flex-nowrap sm:flex-wrap mt-8 w-full">
        <Card
          title="Title Card"
          caption="From colors, cards, typography to complex elements, you will find the full documentation."
          sourceImage="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/illustrations/rocket-white.png"
        />
        
        <Card
          title="Title Card"
          caption="From colors, cards, typography to complex elements, you will find the full documentation."
          sourceImage="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/illustrations/rocket-white.png"
        />
        <Card
          title="Title Card"
          caption="From colors, cards, typography to complex elements, you will find the full documentation."
          sourceImage="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/illustrations/rocket-white.png"
        />

        </div>

    </div>
  )
}

export default Content;