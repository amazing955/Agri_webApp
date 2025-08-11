function Nav(){
  return(
    <nav className="flex align-center justify-around flex-wrap">
      <p className="font-bold text-green-600 text-xl">
        AgriSacco
      </p>

      <ul className="flex justify-around gap-1 align-center flex-wrap">
        <li>Home</li>
        <li>About</li>
        <li>MarketPlace</li>
        <li>Resources</li>
        <li>Contact</li>
        <li>Weather</li>
      </ul>

      <article className="flex justify-between gap-2">
        <button className="text-white bg-green-600 py-1 px-2 rounded-full">LogIn</button>
        <button className="text-white bg-green-600 py-1 px-2 rounded-full">SignUp</button>
      </article>
    </nav>
  )
}

export default Nav;