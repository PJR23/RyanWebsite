import React from 'react';
import { useTweet } from 'react-tweet';
import '../styles/ClientTweetCard.css'; // Importiere die CSS-Datei


const ClientTweetCard = ({ id, apiUrl, fallback, fetchOptions, onError, ...props }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);

  if (isLoading) return fallback || <TweetSkeleton />;
  if (error || !data) return <TweetNotFound />;

  return (
    <div className="tweet-container">
      <h3>{data.user.name}</h3>
      <p>{data.text}</p>
      {/* Weitere Inhalte wie Bilder oder Videos können hier hinzugefügt werden */}
    </div>
  );
};

const TweetSkeleton = () => (
  <div className="tweet-container">
    <div className="skeleton skeleton-avatar" />
    <div className="skeleton skeleton-line" />
    <div className="skeleton skeleton-line" />
  </div>
);

const TweetNotFound = () => (
  <div className="tweet-not-found">
    <h3>Tweet not found</h3>
  </div>
);

export default ClientTweetCard;
