import Netflix_Logo from "./images/Netflix_Logo.png"
const Header = () => {
    return (
        <div>
            <img className="absolute w-64 px-8 py-2 mx-16 bg-gradient-to-b from-black z-10" src={Netflix_Logo} alt="Netflix Logo"/>
        </div>
    )
}

export default Header;