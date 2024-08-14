import React, { useEffect } from 'react';

const TweetEmbed = ({ tweetId }) => {
  useEffect(() => {
    // Lade das Twitter Widgets-Skript, falls es noch nicht geladen ist
    if (!window.twttr) {
      const script = document.createElement('script');
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.onload = () => window.twttr.widgets.load();
      document.body.appendChild(script);
    } else {
      // Lade Widgets, wenn das Skript bereits vorhanden ist
      window.twttr.widgets.load();
    }
  }, [tweetId]);

  return (
    <blockquote className="twitter-tweet">
      <a href={`https://twitter.com/twitter/status/${tweetId}`}>Loading tweet...</a>
    </blockquote>
  );
};

export default TweetEmbed;
