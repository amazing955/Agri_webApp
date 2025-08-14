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

      <article className="grid grid-cols-2 gap-4 mt-4">

        <FeaturesCard cardImage='fas fa-shopping-cart' cardTitle='MarketPlace' cardDescription='Buy and sell farm produce directly without middlemen' />

        <FeaturesCard cardImage='fas fa-book-open' cardTitle='Training Resources' cardDescription='Access educational content on best farming practices' />

        <FeaturesCard cardImage='fas fa-line-chart' cardTitle='Price Tracking' cardDescription='Monitor market trends and price analytics' />

        <FeaturesCard cardImage='fas fa-user-friends' cardTitle='Farmer Network' cardDescription='Connect with other farmers for knowledge sharing' />

        <FeaturesCard cardImage='fas fa-bank' cardTitle='Savings Tracker' cardDescription='Manage your finances and track savings goals' />

        <FeaturesCard cardImage='fas fa-cloud-sun-rain' cardTitle='Weather Forecast' cardDescription='Get accurate weather predictions for better planning' />

        <FeaturesCard cardImage='fas fa-truck' cardTitle='Machine Hire' cardDescription='Access affordable farm equipment when you need it' />

        <FeaturesCard cardImage='fas fa-user-friends' cardTitle='Labor Connection' cardDescription='Find and hire skilled farm workers in your area' />

      </article>
      
    </section>
  )
}

export default FeatureSection;