import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router'

import { getArticles } from './../RoutesApi'


const ArticlesList = () => {


    console.log('>>>> articles list all')
    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticles()
            .then(({ data: { articles } }) => {
                setArticles(articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className="container">

            {articles.map((article) => {

                return (
                    <div key={article.article_id} className="items card w3-teal">
                        <Link id="ln" to={{ pathname: `/api/articles/${article.article_id}` }} state={{ id: article.article_id }} className="link"><img src={article.article_img_url} /></Link>
                        <p>Title: <Link id="ln" to={{ pathname: `/api/articles/${article.article_id}` }} state={{ id: article.article_id }} className="link">{article.title}</Link></p>
                        <p>Author name: {article.author}</p>
                        <p>Topic:  {article.topic}</p>
                        <p>Article ID: <Link id="ln" to={{ pathname: `/api/articles/${article.article_id}` }} state={{ id:  article.article_id  }} className="link">{article.article_id}</Link> </p>
                        <p>Created on: {article.created_at}</p>
                        <p>Comments count: {article.comment_count}</p>
                        <p>Votes:  {article.votes}</p>
                    </div>
                )
            })}
            </section>
     )
}

export default ArticlesList
