import React from 'react';

type IProps = React.HTMLProps<HTMLDivElement> & {
  title?: string;
  value?: string | number;
  buttonLabel?: string;
  onClick?: () => void;
}

const Card: React.FC<IProps> = ({ title, value, buttonLabel, onClick, ...rest }) => {
  return (
    <div {...rest} className={`block max-w-sm rounded-lg bg-white p-6 shadow-lg basis-1/3 md:basis-1/2 sm:basis-1 ${rest.className}`}>
      <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
        {title}
      </h5>
      <p className="mb-4 text-base text-neutral-600">
        {value}
      </p>
      <button
        type="button"
        className="inline-block rounded bg-blue-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-blue-700 transition duration-150 ease-in-out hover:bg-blue-accent-100 focus:bg-blue-accent-100 focus:outline-none focus:ring-0 active:bg-blue-accent-200"
        onClick={onClick}
        {...rest}
      >
        {buttonLabel}
      </button>
    </div>
  );
}

export default Card;
