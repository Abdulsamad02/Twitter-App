import React, { useState } from "react";
import "./like.css";

const Like = () => {
  const [likeTweet, setLikeTweet] = useState(true);

  return (
    <div className="outPut">
      <div onClick={() => setLikeTweet(!likeTweet)}>
        {likeTweet ? (
          <button className="like-btn">Like</button>
        ) : (
          <button className="dislike-btn">DisLike</button>
        )}
      </div>
    </div>
  );
};

export default Like;
