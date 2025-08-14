function Nav(){
  return(
    <nav className="flex flex-col shadow-md/40 p-2 bg-white">

      <article className="flex justify-between align-center mb-1">

      <p className="font-bold text-green-600 text-xl">
        AgriSacco
      </p>

      <article className="flex flex-col gap-1">

        <div className="w-9 rounded-full h-1.5 border-none bg-green-900"></div>

        <div className="w-9 rounded-full h-1.5 border-none bg-green-900"></div>

        <div className="w-9 rounded-full h-1.5 border-none bg-green-900"></div>

      </article>

      </article>

      <ul className="flex flex-col font-semibold mb-2">
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