import StepsCard from "./StepsCard";

function HowItWorks(){
  return(
    <section className="p-2">
      <h2 className="text-center text-3xl font-bold my-3">
        How It Works
      </h2>

      <p className="text-center text-gray-700">
        Simple steps to get started
      </p>

      <article className="grid grid-cols-2 gap-4 mt-4">
        <StepsCard cardImage='fas fa-user-plus' cardStep='1. Sign Up' cardDescription='Create your account as a farmer or buyer to get started' />

        <StepsCard cardImage='fas fa-list' cardStep='2. Post or Browse' cardDescription='List your produce or browse available listings' />
        
        <StepsCard cardImage='fas fa-handshake' cardStep='3. Connect & Trade' cardDescription='Communicate and complete transactions securely' />
      </article>
    </section>
  )
}

export default HowItWorks;