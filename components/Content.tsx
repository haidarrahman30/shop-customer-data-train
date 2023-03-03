import React from 'react';
import Card from './Card';
import Header from './Header';

function Content() {
  return (
    <div className="flex-1 h-screen p-7 bg-light">
        <Header title="Dashboard Page" />
        
        {/* Card Dashboard Example */}
        <div className="flex flex-row gap-3 flex-wrap mt-8 w-full">
          <Card
            title="Total User"
            value={28}
            buttonLabel="Click Data"
            style={{ textAlign: 'center' }}
          />

        <Card
            title="Total User"
            value={28}
            buttonLabel="Click Data"
            style={{ textAlign: 'center' }}
          />

        <Card
            title="Total User"
            value={28}
            buttonLabel="Click Data"
            style={{ textAlign: 'center' }}
          />

        <Card
            title="Total User"
            value={28}
            buttonLabel="Click Data"
            style={{ textAlign: 'center' }}
          />
        </div>

    </div>
  )
}

export default Content;