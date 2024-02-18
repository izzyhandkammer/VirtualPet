import React, { useState } from "react";

function Pet() {
  const [hunger, setHunger] = useState(75);
  const [energy, setEnergy] = useState(75);
  const [love, setLove] = useState(25);
  const [wisdom, setWisdom] = useState(0);
  const [stateMessage, setStateMessage] = useState("");
  const [monkeyMessage, setMonkeyMessage] = useState("");
  const [showFeedOptions, setShowFeedOptions] = useState(false);
  const [showPlayOptions, setShowPlayOptions] = useState(false);

  const feedNewFood = () => {
    const randomEvent = Math.random();
    if (randomEvent < 0.2) {
      setStateMessage("Monkey found a superfood!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I cant believe it! I found a superfood! I feel so much better now!"
        );
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Finding this superfood reinforces the importance of nourishing my body and mind."
        );
      } else {
        setMonkeyMessage(
          "Finding this superfood reaffirms my belief in the wisdom of nature's bounty. It sustains not just my body, but my soul."
        );
      }
      setHunger(hunger + 10);
      setLove(love + 5);
      setEnergy(energy + 5);
      setWisdom(wisdom + 10);
    } else if (randomEvent < 0.4) {
      setStateMessage("Monkey had an allergic reaction to the new food!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "My tummy feels funny... Maybe I shouldn't have tried that new food."
        );
        setHunger(hunger + 1);
        setLove(love - 1);
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Sometimes taking risks can hurt me when I'm not operating mindfully."
        );
        setHunger(hunger + 1);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "Lesson learned: In the journey to enlightenment, discernment is key. I shall tread mindfully on the path of nourishment."
        );
        setHunger(hunger + 1);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      }
    } else if (randomEvent < 0.6) {
      setStateMessage("Monkey found a new favorite food!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I can't believe I've never tried this before! It's so good!"
        );
        setHunger(hunger + 5);
        setLove(love + 5);
        setWisdom(wisdom + 2);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "I'm glad I tried this new food. It's good to have variety in my diet."
        );
        setHunger(hunger + 5);
        setLove(love + 5);
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "The universe has blessed me with a new favorite food. I am grateful for this nourishment."
        );
        setHunger(hunger + 5);
        setLove(love + 5);
        setWisdom(wisdom + 3);
      }
    } else if (randomEvent < 0.8) {
      setStateMessage("Monkey spilled their bowl!");
      if (wisdom < 25) {
        setMonkeyMessage("Oops! I'm so clumsy!");
        setHunger(hunger - 1);
        setLove(love - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "I guess today's meal is a little delayed. Patience is a virtue!"
        );
        setHunger(hunger - 1);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "No use crying over spilled food, right? Let's clean up and try again."
        );
        setHunger(hunger - 1);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      }
    } else {
      setStateMessage("Monkey shared their food with you!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Friendship is sharing, and sharing is caring! Feeling loved and grateful."
        );
        setHunger(hunger + 3);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Sharing food is sharing love. Blessed to have such caring friends."
        );
        setHunger(hunger + 3);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      } else {
        setMonkeyMessage(
          "A shared meal, a shared bond. Thankful for the warmth of friendship."
        );
        setHunger(hunger + 3);
        setLove(love + 5);
        setWisdom(wisdom + 5);
      }
    }
    setShowFeedOptions(false);
  };

  const feedFavoriteFood = () => {
    const randomEvent = Math.random();
    if (randomEvent < 0.2) {
      setStateMessage(
        "Monkey loves his favorite food just as much as expected!"
      );
      if (wisdom < 25) {
        setMonkeyMessage(
          "Wow, this hits the spot! I feel like I could conquer the world after a meal like this!"
        );
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Feeding on my favorite food fills me with contentment and joy. It's a simple pleasure that brightens even the gloomiest of days."
        );
      } else {
        setMonkeyMessage(
          "In this moment of indulgence, I am reminded of the interconnectedness of joy and gratitude. True satisfaction lies not in abundance, but in appreciation for life's simple blessings."
        );
      }
      setHunger(hunger + 5);
      setLove(love + 5);
      setEnergy(energy + 5);
      setWisdom(wisdom + 1);
    } else if (randomEvent < 0.4) {
      setStateMessage("Monkey ate a little too much!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Oops! I may have gone a bit overboard with my favorite food... But hey, you only live once, right?"
        );
        setHunger(hunger + 1);
        setLove(love - 1);
        setWisdom(wisdom - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Indulging in my favorite food a bit too much reminds me of the importance of moderation and self-control. Balance is key to a fulfilling life."
        );
        setHunger(hunger + 1);
        setLove(love + 1);
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "Even in moments of excess, there are valuable lessons to be learned. This experience serves as a gentle reminder to practice mindfulness and moderation in all things."
        );
        setHunger(hunger + 1);
        setLove(love + 3);
        setWisdom(wisdom + 2);
      }
    } else if (randomEvent < 0.6) {
      setStateMessage("Monkey's favorite food was a little stale!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I guess I should have checked the expiration date... I feel a little queasy."
        );
        setHunger(hunger + 1);
        setLove(love - 1);
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "I should have been more mindful of the freshness of my favorite food. A small mistake, but a valuable lesson."
        );
        setHunger(hunger + 1);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of discomfort, I am reminded of the importance of mindfulness and discernment. I shall tread mindfully on the path of nourishment."
        );
        setHunger(hunger + 1);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      }
    } else if (randomEvent < 0.8) {
      setStateMessage("Monkey's favorite food was a little too spicy!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Whew! That was a little too much spice for me... My mouth is on fire!"
        );
        setHunger(hunger - 1);
        setLove(love - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "A little too much spice reminds me of the importance of balance and moderation. A valuable lesson learned."
        );
        setHunger(hunger - 1);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of discomfort, I am reminded of the importance of mindfulness and discernment. I shall tread mindfully on the path of nourishment."
        );
        setHunger(hunger - 1);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      }
    } else {
      setStateMessage("Monkey tried a new recipie for a classic favorite!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I never knew my favorite food could taste even better with this new recipe! Life's full of surprises."
        );
        setHunger(hunger + 3);
        setLove(love + 1);
        setWisdom(wisdom + 2);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Experimenting with my favorite food opens my eyes to new possibilities. It's a reminder to embrace change and welcome growth."
        );
        setHunger(hunger + 3);
        setLove(love + 3);
        setWisdom(wisdom + 3);
      } else {
        setMonkeyMessage(
          "In this moment of culinary exploration, I am reminded of the infinite potential for transformation and renewal. True wisdom lies in openness to new experiences and perspectives."
        );
        setHunger(hunger + 3);
        setLove(love + 5);
        setWisdom(wisdom + 5);
      }
    }
    setEnergy(energy + 5);
    setShowFeedOptions(false);
  };

  const playOutside = () => {
    const randomEvent = Math.random();
    if (randomEvent < 0.2) {
      setStateMessage("Monkey found a new friend!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I made a new friend today! I feel so happy and loved."
        );
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "I want to become the love I want to recieve. I am grateful for the love of my friends."
        );
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of shared joy, I am reminded of the interconnectedness of all beings. True fulfillment lies in the warmth of friendship and love."
        );
        setWisdom(wisdom + 3);
      }
      setLove(love + 5);
      setEnergy(energy - 10);
    } else if (randomEvent < 0.4) {
      setStateMessage("Monkey got lost!");
      if (wisdom < 25) {
        setMonkeyMessage("I'm lost... I feel so scared and alone.");
        setWisdom(wisdom - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Feeling lost is a reminder to be mindful of my surroundings. A valuable lesson learned."
        );
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "In this moment of uncertainty, I am reminded of the importance of mindfulness and discernment. I shall tread mindfully on the path of exploration."
        );
        setWisdom(wisdom + 2);
      }
      setLove(love - 5);
      setEnergy(energy - 15);
    } else if (randomEvent < 0.6) {
      setStateMessage("Monkey found a new favorite place to play!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I can't believe I've never been here before! This place is so much fun!"
        );
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Exploring new places opens my eyes to new possibilities. It's a reminder to embrace change and welcome growth."
        );
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of exploration, I am reminded of the infinite potential for transformation and renewal. True wisdom lies in openness to new experiences and perspectives."
        );
        setWisdom(wisdom + 3);
      }
      setLove(love + 3);
      setEnergy(energy - 10);
    } else if (randomEvent < 0.8) {
      setStateMessage("Monkey got into a fight!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I got into a fight today... I feel so angry and hurt."
        );
        setWisdom(wisdom - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "No matter what life throws at me, I remain soft and I remain resiliant."
        );
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "Despite my imperfections I am still worthy of love, I always have been."
        );
        setWisdom(wisdom + 2);
      }
      setLove(love - 5);
      setEnergy(energy - 20);
    } else {
      setStateMessage("Monkey found some treasure!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Look what I found! A shiny rock! I'll treasure it forever!"
        );
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Stumbling upon this hidden gem reminds me of life's unexpected treasures. It's a reminder to cherish the beauty of nature and the wonders it holds."
        );
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of discovery, I am reminded of the interconnectedness of all things. True wealth lies not in material possessions, but in the richness of experience and appreciation for the world around us."
        );
        setWisdom(wisdom + 3);
      }
      setLove(love + 5);
      setEnergy(energy - 15);
    }
    setShowPlayOptions(false);
  };

  const doArtsAndCrafts = () => {
    const randomEvent = Math.random();
    if (randomEvent < 0.2) {
      setStateMessage("Monkey made a beautiful masterpiece!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Look what I made! It's a colorful mess, but I love it!"
        );
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Creating something beautiful fills me with joy and a sense of accomplishment. I am grateful for the gift of creativity."
        );
        setWisdom(wisdom + 2);
      } else {
        setMonkeyMessage(
          "In this moment of creation, I am reminded of the infinite potential within each of us. True art lies not in perfection, but in the expression of our innermost selves."
        );
        setWisdom(wisdom + 3);
      }
      setLove(love + 5);
      setEnergy(energy - 10);
    } else if (randomEvent < 0.4) {
      setStateMessage("Monkey made a mess!");
      if (wisdom < 25) {
        setMonkeyMessage("Oops! I made a mess... I feel so embarrassed.");
        setWisdom(wisdom - 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Creating art can be messy, but I will become better. Not out of shame, but out of love."
        );
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "In the midst of this mess, I find beauty and possibility. I must learn to proceed without certainty."
        );
        setWisdom(wisdom + 2);
      }
      setLove(love - 5);
      setEnergy(energy - 15);
    } else if (randomEvent < 0.6) {
      setStateMessage("Monkey is making art with their friend!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Hey, let's all work on this art project together! The more, the merrier!"
        );
        setWisdom(wisdom + 2);
        setLove(love + 5);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "Collaborating with friends enriches the creative process and strengthens our bond. It's a reminder that true art can be born from connection and collaboration."
        );
        setWisdom(wisdom + 3);
        setLove(love + 5);
      } else {
        setMonkeyMessage(
          "In the synergy of collaboration, I find inspiration and support. True art lies not in individual achievement, but in the collective expression of humanity."
        );
        setWisdom(wisdom + 5);
        setLove(love + 5);
      }
      setLove(love + 5);
      setEnergy(energy - 10);
    } else if (randomEvent < 0.8) {
      setStateMessage("Monkey finds expresion through art!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "I'm feeling happy today, so I'm painting a rainbow! Whee!"
        );
        setLove(love + 2);
        setWisdom(wisdom + 1);
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "I feel so free when I create art. It's a beautiful way to express myself."
        );
        setWisdom(wisdom + 2);
        setLove(love + 3);
      } else {
        setMonkeyMessage(
          "In creation, I find liberation and joy. True art lies not in the product, but what we discover about ourselves in the process."
        );
        setWisdom(wisdom + 5);
        setLove(love + 5);
      }
    } else {
      setStateMessage("Monkey discovers new materials for art!");
      if (wisdom < 25) {
        setMonkeyMessage(
          "Whoa, what's this shiny thing? Can I use it for my art project?"
        );
      } else if (25 < wisdom < 75) {
        setMonkeyMessage(
          "When I work with mediums unfamiliar to me, I am reminded that I'm happiest when I embrace curiosity and experiment with new ideas."
        );
        setWisdom(wisdom + 1);
      } else {
        setMonkeyMessage(
          "The universe always finds a way to tell me that it loves me. I am grateful for the gift of these new materials."
        );
        setWisdom(wisdom + 5);
      }
    }
  };

  const sleep = () => {
    setEnergy(energy + 25);
    setHunger(hunger - 5);
    const randomEvent = Math.random();
    if (wisdom < 25) {
      if (randomEvent < 0.25) {
        setStateMessage(
          "Monkey had a nightmare! They woke up feeling scared and uneasy."
        );
        setLove(love - 5);
      } else if (randomEvent < 0.5) {
        setStateMessage(
          "Monkey had a dream that you were swinging from tree to tree together! They woke up feeling excited and adventurous!"
        );
        setLove(love + 5);
        setWisdom(wisdom + 3);
      } else if (randomEvent < 0.75) {
        setStateMessage(
          "Monkey had a dream that a great rain came and washed over them. They woke up feeling lighter and refreshed."
        );
        setWisdom(wisdom + 5);
        setLove(love + 5);
      } else {
        setStateMessage("Monkey had a dream that they were lost in the jungle, but they weren't scared. They woke up feeling brave and confident.");
        setWisdom(wisdom + 5);
        setLove(love + 2);
      }
    }
  };

  return (
    <div>
      <h2>Pet Status</h2>
      <p>Hunger: {hunger}</p>
      <p>Energy: {energy}</p>
      <p>Love: {love}</p>
      <p>Wisdom: {wisdom}</p>

      <button onClick={() => setShowFeedOptions(!showFeedOptions)}>Feed</button>
      {showFeedOptions && (
        <div>
          <button onClick={feedFavoriteFood}>Feed Favorite Food</button>
          <button onClick={feedNewFood}>Try New Food</button>
        </div>
      )}

      <button onClick={() => setShowPlayOptions(!showPlayOptions)}>Play</button>
      {showPlayOptions && (
        <div>
          <button onClick={playOutside}>Play Outside</button>
          <button onClick={doArtsAndCrafts}>Do Arts and Crafts</button>
        </div>
      )}
      <button onClick={sleep}>Sleep</button>

      <p>{stateMessage}</p>
      <p>{monkeyMessage}</p>
    </div>
  );
}

export default Pet;
