
type CardProps = {
  title: string;
  caption: string;
  sourceImage: string;
};

const Card = ({ title, caption, sourceImage }: CardProps) => {
  return (
    <div className="relative flex flex-col min-w-0 break-words bg-white shadow-xl rounded-2xl bg-clip-border lg:w-1/3 sm:w-1/2">
      <div className="flex-auto p-4 ">
        <div className="flex flex-wrap -mx-3">
          <div className="max-w-full px-3 lg:w-1/2 lg:flex-none">
            <div className="flex flex-col h-full">
              <h5 className="font-bold">{title}</h5>
              <p className="mb-12">{caption}</p>
              <a className="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500" href="#">
                Read More
                <i className="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
              </a>
            </div>
          </div>
          <div className="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
            <div className="h-full bg-gradient-to-tl from-blue-500 to-violet-500 rounded-xl">
              <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-tailwind/img/shapes/waves-white.svg" alt="waves" className="absolute top-0 hidden w-1/2 h-full lg:block sm:h-12 sm:w-12" />
              <div className="relative flex items-center justify-center h-full">
                <img src={sourceImage} alt={title} className="relative z-20 w-full pt-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
