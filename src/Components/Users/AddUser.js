 
import React, {useState} from 'react';
import Like from "./like";
import   './AddUser.css';

const AddUser = () => {
  const [tweet, setTweet] = useState("");
  const [getTweet, setGetTweet] = useState([]);

  console.log(getTweet);
  const submitHandler = (e) => {
    e.preventDefault();

    if (tweet) {
      const eachTweet = {
        id: new Date().getTime().toString(),
        tweet
      };

      console.log(eachTweet);

      setGetTweet((tweet) => {
        return [...tweet, eachTweet];
      });

      setTweet("");
    }
  };

  return (
    <div className="card">
      <form onSubmit={submitHandler} className="card">
        <input
          className="btn-input"
          type="text"
          name="tweet"
          id="tweet"
          value={tweet}
          placeholder="Tweet here"
          onChange={(e) => setTweet(e.target.value)}
        />
        <button type="submit" className="btn-tweet">
          Tweet
        </button>
      </form>
      {getTweet.map((each) => {
        const { id, tweet } = each;
        return (
          <>
            <div key={id} className="tweet">
              <p className="tweet-text">{tweet}</p>
              <div className="btn-container">
                <button
                  type="button"
                  className="del-btn"
                  onClick={() =>
                    setGetTweet(getTweet.filter((each) => each.id !== id))
                  }
                >
                  Delete
                </button>
                <Like />
              </div>
            </div>
          </>
        );
      })}
      ;
    </div>
  );
};
export default AddUser;