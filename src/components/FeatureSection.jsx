import FeaturesCard from "./FeaturesCard"

function FeatureSection(){
  return(
    <section>
      <h2 className="text-center text-3xl font-bold my-3">
        Key Features
      </h2>
      <p className="text-center text-gray-700">
        Everything you need to succeed in agriculture
      </p>

      <article className="grid grid-cols-1">
        <FeaturesCard />
      </article>
    </section>
  )
}

export default FeatureSection;