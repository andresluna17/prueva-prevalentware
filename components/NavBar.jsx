export default function NavBar() {
  return (
    <nav className="bg-grayNavBar min-w-full h-20 flex justify-around">
      <div className="flex items-center">
        <img src="/nav/logo.svg" alt="logo" />
        <h2 className="text-white font-bold text-base">Gente PreValente</h2>
      </div>
      <div className="flex items-center">
        <img src="/nav/search.svg" alt="search" />
        <input
          type="text"
          className="bg-grayNavBar placeholder-white focus:outline-none focus:ring focus:border-blue-200 py-1 px-2 ml-2 rounded-md"
          placeholder="Buscar..."
        />
      </div>
      <div className="flex items-center">
        <img src="/nav/settings.svg" alt="settings" />
        <h2 className="text-base text-white mr-1 ml-5">Administración</h2>
        <p className="m-0 text-xxs relative -top-2 text-white bg-red-600 rounded-full px-1">
          2
        </p>
      </div>
      <div className="flex items-center">
        <img src="/nav/job.svg" alt="job" />
        <h2 className="text-base text-white mx-3">Empleo</h2>
        <img src="/nav/down.svg" alt="down" />
      </div>
      <div className="flex items-center">
        <img src="/nav/cv.svg" alt="cv" />
        <h2 className="text-base text-white mx-3">Mi CV</h2>
      </div>
      <div className="flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/21/23/avatar-2027366_1280.png"
          alt="user-photo"
          className="w-8 h-8 rounded-full bg-gray-600 object-contain"
        />
        <h2 className="text-base text-white mx-3">Mi CV</h2>
        <img src="/nav/down.svg" alt="down" />
      </div>
    </nav>
  );
}
