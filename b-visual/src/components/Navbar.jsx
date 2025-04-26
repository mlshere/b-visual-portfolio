const Navbar = ({ toggleMenu }) => {
    return (
      <div className="absolute top-4 left-4 z-50 flex justify-between w-full px-6">
        <img src="/assets/images/LOGO B-VISUAL.png" className="h-8" alt="logo" />
        <button onClick={toggleMenu} className="text-white text-3xl">
          ☰
        </button>
      </div>
    )
  }

export default Navbar;