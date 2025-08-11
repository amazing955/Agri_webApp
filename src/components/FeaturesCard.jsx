function FeaturesCard({ cardImage, cardTitle, cardDescription }){
  return(
    <article className="flex flex-col *:text-left justify-center align-top p-5 bg-gray-100 rounded-xl shadow-md">

      <i className={`${cardImage} text-green-700 text-[2rem] mb-2`}></i>

      <h3 className="font-semibold text-xl mb-2">
        {cardTitle}
      </h3>

      <p className="text-gray-700">
        {cardDescription}
      </p>

    </article>
  )
}

export default FeaturesCard;