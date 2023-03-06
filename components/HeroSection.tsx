import React from 'react';

type Props = {
  children: React.ReactNode;
}

const Hero: React.FC<Props> = ({ children }) => {
  return (
    <div className="h-24 bg-dark-purple file:text-center text-white flex justify-center items-center rounded-lg">
      <div className="w-full ml-4">
        {children}
      </div>
    </div>
  );
}

export default Hero;
