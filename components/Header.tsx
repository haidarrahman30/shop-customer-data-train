import React from 'react';

type IProps = {
  title: string;
}

const Header: React.FC<IProps> = ({ title }) => {
  return (
    <h1 className="text-2xl font-semibold">
      {title}
    </h1>
  );
}

export default Header;
