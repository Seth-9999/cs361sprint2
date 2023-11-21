import { useState, useEffect } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  const [APIKey, setAPIKey] = useState();
  const [productID, setProductID] = useState();

  const getReviews = async (_APIKey) => {
    const response = await fetch(`/apiv01/reviews/${_APIKey}`);
    const reviews = await response.json();
    setReviews(reviews);
    console.log(reviews);
  };

  const getReviewsByAPIKeyAndProductID = async (_APIKey, _productID) => {
    const response = await fetch(`/apiv01/reviews/${_APIKey}/${_productID}`);
    const reviews = await response.json();
    setReviews(reviews);
    console.log(reviews);
  };

  const items = [
    {
      id: "01",
      title: "Ender's Game",
      desc: "Ender's Game is a 1985 military science fiction novel by American author Orson Scott Card. Set at an unspecified date in Earth's future, the novel presents an imperiled humankind after two conflicts with an insectoid alien species they dub \"the buggers\". In preparation for an anticipated third invasion, Earth's international military force recruits young children, including the novel's protagonist, Andrew \"Ender\" Wiggin, to be trained as elite officers. The children learn military strategy and leadership by playing increasingly difficult war games, including some in zero gravity, where Ender's tactical genius is revealed. (Wikipedia)",
    },
    {
      id: "02",
      title: "WolfBlade (Warhammar)",
      desc: "The ancient Navigator House of Belisarius has long been bound to the mighty Space Wolves as allies. In return for the means to navigate the treacherous warp, the Space Wolves provide an honour guard of elite warriors – the Wolfblade – to protect the House. When Ragnar, exiled to Terra for his role in the loss of the Spear of Russ, takes up his duties on ancient Terra he soon becomes embroiled in an assassination plot that reaches into the very depths of Imperium! Unused to the delicate political machinations, Ragnar must resort to the howling fury of the Wolves if he is to save this noble dynasty and regain his honour! (Wikipedia)",
    },
    {
      id: "03",
      title: "Atomic Habits",
      desc: "No matter your goals, Atomic Habits offers a proven framework for improving--every day. James Clear, one of the world's leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results. If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights. (Amazon)",
    },
  ];

  return (
    <>
      {items.map((item) => {
        return (
          <div className="card">
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <p>Reviews LSLLSLLsl</p>
            <div>
              {reviews &&
                reviews.map((review) => {
                  return (
                    <>
                      <h4>{review.title}</h4>
                      <p>{review.comments}</p>
                    </>
                  );
                })}
            </div>
          </div>
        );
      })}

      <label>Firm Name</label>
      <input type="text" onChange={(e) => setAPIKey(e.target.value)}></input>
      <button onClick={() => getReviews(APIKey)}>
        Get All Reviews by APIKey only
      </button>
      <br></br>
      <label>Firm Name</label>
      <input type="text" onChange={(e) => setAPIKey(e.target.value)}></input>
      <label>ProductID</label>
      <input type="text" onChange={(e) => setProductID(e.target.value)}></input>
      <button onClick={() => getReviewsByAPIKeyAndProductID(APIKey, productID)}>
        Get one Reviews By APIKey, ProductID Only
      </button>
    </>
  );
};

export default Reviews;
