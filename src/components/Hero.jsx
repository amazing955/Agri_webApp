function Hero(){
  return (
    <section className="relative w-full h-[80vh]">
      <img
        src="src/assets/Images/Hero/photo-1500937386664-56d1dfef3854.webp"
        alt="Image of a wheat farm with two men shaking hands in the background"
        className="w-full h-full absolute inset-0 object-cover block"
      />
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"></div>

      <article className="absolute z-10 text-white inset-0 flex flex-col  items-center justify-center w-full">
        <h1 className="text-5xl text-center font-bold">
        Empowering Farmers, Enriching Communities
        </h1>
        <p className="mt-2 text-center">
        Connecting farmers to markets, resources, and financial solutions for sustainable agriculture.
        </p>

        <article className="flex flex-col gap-2 mt-2">
          <button className="text-white bg-green-600 py-1 px-2 rounded-md">
            Join as Farmer
          </button>

          <button className="text-green-600 bg-white py-1 px-2 rounded-md">
            Contribute on Github
          </button>
        </article>
      </article>
    </section>
  )
}

export default Hero;