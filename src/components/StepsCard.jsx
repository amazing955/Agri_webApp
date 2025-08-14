function StepsCard({ cardImage, cardStep, cardDescription}){
  return(
    <article className="flex flex-col *:text-center justify-center align-top p-5 bg-gray-100 rounded-xl shadow-md w-[60vw]">

      <div>
        <i className={`${cardImage} text-green-700 text-[2rem] mb-2`}></i>
      </div>

      <h3 className="font-semibold text-xl mb-2">
        {cardStep}
      </h3>

      <p className="text-gray-700">
        {cardDescription}
      </p>

    </article>
  )
}

export default StepsCard;