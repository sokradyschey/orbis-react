import grow_logo from './grow_logo.png';

function Navigation() {
  return (
    <header className="w-full bg-midnight font-bold text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center h-16">
                <div className="w-full flex items-center justify-between leading-4 text-4">
                <div className="flex items-center">
                    <div id="header-logo" className="bg-white rounded-lg">
                        <img className="h-9 w-14" src={grow_logo} />
                    </div>
                    <div id="header-separator1" className="bg-lime w-0.5 h-11 ml-5 mr-5 align-middle"></div>
                    <div id="header-company-name"><span className="font-bold text-4xl">OrbisLab</span></div>
                </div>
                <div className="flex items-center">
                    <div id="header-main-nav" className="font-bold">
                        <a href="#" className="ml-10">Operations</a>
                        <a href="#" className="ml-10 text-gray50">Analysis</a>
                        <a href="#" className="ml-10 text-gray50">Quality</a>
                    </div>
                    <div id="header-separator1" className="bg-lime w-0.5 h-11 ml-5 mr-5 align-middle"></div>
                    <div id="header-welcome-user">Welcome, Sokrady</div>
                    <div id="header-i-button font-sans" className="ml-6"><i className="fa-solid fa-circle-info text-gray30 text-8"></i></div>
                </div>
            </div>
            </div>
        </div>
    </header>
  );
}

export default Navigation;
