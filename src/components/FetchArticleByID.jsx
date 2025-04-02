import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router"

import { getArticleByID }  from './../RoutesApi'
import ArticleComments from './FetchArticleComments'


const ArticleContent = (article_id) => {

    const { id } = useParams()
    console.log(id, '>>>> article content')

    console.log(useParams())

    const [articles, setArticles] = useState([])

    useEffect(() => {
        getArticleByID(id)
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
                    <>
                        <div key={article.article_id} className="items card">
                            <img src={article.article_img_url} />
                            <p>Topic: {article.topic}</p>
                            <p>Title: {article.title}</p>
                            <p>By {article.author}</p>
                            <article>{article.body}</article>

                            <p>Article ID: {article.article_id}</p>
                            <p>Created on: {article.created_at}</p>
                            <p>Votes: {article.votes}</p>
                        </div>
                        <h2>Comments for the article {article.article_id}</h2>            
                        <ArticleComments article_id={article.article_id} />
                    </>
                )

            })}

        </section>
    )
};

export default ArticleContent