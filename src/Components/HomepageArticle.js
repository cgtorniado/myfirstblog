import React from 'react'
import ArticleContent from './ArticleContent'

const HomepageArticle = (props) => {
  return (
    <>

      {/* {
        ArticleContent.map((article, key) => (
          <Link key={key} to={`/articles-page/${article.name}`}>
            <h2>{article.title}</h2>
            <p>{article.content[0].substring(0, 50)} ...</p>
          </Link>
        ))
      } */}

      
      <h3 className="ui header herobot">{[ArticleContent[0].title]}</h3>
      <p>{ArticleContent[0].content}</p>
    </>
  )
}

export default HomepageArticle