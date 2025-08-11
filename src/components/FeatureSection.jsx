import FeaturesCard from "./FeaturesCard"

function FeatureSection(){
  return(
    <section className="p-2">
      <h2 className="text-center text-3xl font-bold my-3">
        Key Features
      </h2>
      <p className="text-center text-gray-700">
        Everything you need to succeed in agriculture
      </p>

      <article className="grid grid-cols-2 gap-1">
        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='MarketPlace' cardDescription='Buy and sell farm produce directly without middlemen' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Training Resources' cardDescription='Access educational content on best farming practices' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Price Tracking' cardDescription='Monitor market trends and price analytics' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Farmer Network' cardDescription='Connect with other farmers for knowledge sharing' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Savings Tracker' cardDescription='Manage your finances and track savings goals' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Weather Forecast' cardDescription='Get accurate weather predictions for better planning' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Machine Hire' cardDescription='Access affordable farm equipment when you need it' />

        <FeaturesCard cardImage='src\assets\Images\Hero\photo-1500937386664-56d1dfef3854.webp' cardTitle='Labor Connection' cardDescription='Find and hire skilled farm workers in your area' />
      </article>
    </section>
  )
}

export default FeatureSection;