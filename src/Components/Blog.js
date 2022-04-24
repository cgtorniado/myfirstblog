import React from 'react'
import ArticleContent from './ArticleContent'
import { Link } from 'react-router-dom'

const Blog = () => {
  return (
    <div className='container p-5'>
      <h1 className='text-primary display-1 pt-5'>Articles</h1>

      {
        ArticleContent.map((article, key) => (
          <div className='p-5'>
          <Link key={key} to={`/blog/${article.name}`}>
            <h2>{article.title}</h2>
            <p  className="p-5" style={{backgroundImage:`url(${article.photo})`, opacity:"0.7", color:"black"}}>{article.content[0].substring(0, 100)} ... <br/> Read more <i class="bi bi-arrow-right-square"></i></p>
          </Link>
          </div>
        ))
      }

    </div>
  )
}

export default Blog