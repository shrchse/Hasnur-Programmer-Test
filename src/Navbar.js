const Navbar = () => {
    return ( 
        <nav className="bg-green-100 flex flex-row justify-between px-36">
            <h1 className="">IT Matsuri 2023</h1>
            <div className="links">
                <a href="/">Home</a>
                {/* <a href="/create"></a> */}
            </div>
        </nav>
    );
}

export default Navbar;