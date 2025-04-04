import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from "react-router"

import { getArticleByID }  from './../RoutesApi'
import ArticleComments from './FetchArticleComments'
import IncrementVote from './IncrementVote'


const ArticleContent = (article_id) => {
    const { id } = useParams()
    const [articles, setArticles] = useState([])
    const [voteCount, setVoteCount] = useState([])

    useEffect(() => {
        getArticleByID(id)
            .then(({ data: { articles } }) => {
                setArticles(articles)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [voteCount])

    return (
        <section className="container">
            {articles.map((article) => {
                return (
                    <section key={article.article_id}>
                        <div className="items w3-teal">
                            <p>Topic: {article.topic}</p>
                            <p>Title: {article.title}</p>
                            <p>By {article.author}</p>
                            <article><img style={{width:"170px", height:"170px", margin:"0px 25px 5px 5px"}} src={article.article_img_url} />
                            {article.body}</article>

                            <p>Article ID: {article.article_id}</p>
                            <p>Created on: {article.created_at}</p>
                            <p>Votes: {article.votes}</p>
                            <IncrementVote article_id={article.article_id} setVoteCount={setVoteCount} />
                        </div>
                        <h2>Comments for the article {article.article_id}</h2>            
                        <ArticleComments article_id={article.article_id}  />
                    </section>
                )

            })}

        </section>
    )
};

export default ArticleContent