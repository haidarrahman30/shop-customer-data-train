import React from 'react';
import Card from './Card';
import CardTotal from './CardTotal';
import Header from './Header';
import Hero from './HeroSection';
import Table from './Table';

function Content() {
  const data = [
    {
      name: 'John Michael',
      email: 'john@creative-tim.com',
      job: 'Manager',
      status: 'Online',
      employed: '23/04/2018',
    },
    {
      name: 'Jane Doe',
      email: 'jane@creative-tim.com',
      job: 'Designer',
      status: 'Offline',
      employed: '05/12/2019',
    },
    {
      name: 'Bob Smith',
      email: 'bob@creative-tim.com',
      job: 'Developer',
      status: 'Online',
      employed: '11/09/2017',
    },
    {
      name: 'Alice Johnson',
      email: 'alice@creative-tim.com',
      job: 'Manager',
      status: 'Offline',
      employed: '02/06/2016',
    },
    {
      name: 'Mark Davis',
      email: 'mark@creative-tim.com',
      job: 'Developer',
      status: 'Online',
      employed: '17/03/2020',
    },
  ];
  

  return (
    <div className="flex-1 h-screen p-7 bg-light">
        <Hero><Header title="Dashboard Page" /></Hero>
        
        {/* Card Dashboard Example */}
        <div className="flex flex-wrap lg:flex-nowrap sm:flex-wrap gap-3 mt-8 w-full">
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' />
          <CardTotal title='Total Uang' totalItem='50' /> 
        </div>

        <div className="flex gap-8 flex-wrap lg:flex-nowrap sm:flex-wrap mt-8 w-full">
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

        <div className="flex flex-wrap gap-3 mt-8 w-full">
        <Header title="Table Example" /> <br />
          <Table data={data} />
        </div>

    </div>
  )
}

export default Content;