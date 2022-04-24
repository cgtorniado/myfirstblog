import React from 'react'
import { useParams } from 'react-router-dom'
import ArticleContent from './ArticleContent';
import NotFoundPage from './NotFoundPage';
import { Link } from 'react-router-dom';

const ArticleSinglePage = ({ articles }) => {

    const { name } = useParams();

    const article = ArticleContent.find(article => article.name === name)

    if (!article) return (<NotFoundPage />)

    return (
        <>
            <div className="p-5 mb-4 rounded-3">
                <div className="container-fluid py-5">
                    {article.content.map((paragraph, key) => (
                        <div>
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{article.title}</li>
                                </ol>
                            </nav>

                            <h1 className="display-5 fw-bold text-primary pt-5" key={key}>{article.title}</h1>
                            <p className='pb-5'>Category:{article.category}</p>
                           
                            <p className="col-md-8 fs-3 p-5" style={{ backgroundImage: `url(${article.photo})`, width: "80vw", height: "40vh", margin: "auto", backgroundSize:"cover",color:"white", textShadow:"2px 2px 0px #7a7a7a" }}>{article.featuredtext}</p>

                            <div className='p-5'>
                            <p className="p-5 fs-3"><div className='new-line' style={{whiteSpace:"pre-line"}}>{paragraph}</div></p>
                            </div>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item active" aria-current="page"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item"><Link to="/blog">Blog</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">{article.title}</li>
                                </ol>
                            </nav>
                        </div>
                    )
                    )}
                </div>
            </div>
        </>
    )
}

export default ArticleSinglePage