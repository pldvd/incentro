import React, { useEffect, useState } from 'react';
import axios from 'axios';


function DetailedView(props) {

  const [article, setArticle] = useState(null);

  const postStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#eee",
    padding: "10px 20px",
  }

  useEffect(() => {
    const articleId = props.match.params.id;
    axios.get(`https://jsonplaceholder.typicode.com/posts/${articleId}`)
      .then(result => {
        setArticle(result.data)
      });
  }, [props.match.params.id]);


  return (

    <div style={postStyle}>
      <h3>{article ? article.id : 'loading'}</h3>
      <p>{article ? article.body : 'loading'}</p>
    </div>
  )
}

export default DetailedView
