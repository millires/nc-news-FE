import { useState } from 'react'
import { useEffect } from 'react'

import { getArticleComments } from './../RoutesApi'


const ArticleComments = (article_id) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        getArticleComments(article_id.article_id)
            .then(({ data: { comments } }) => {
                setComments(comments)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className="container">
            {comments.map((comment) => {
                return (
                    <div key={comment.comment_id} className="items card">
                        <article>{comment.body}</article>
                        <p>Comment ID:  {comment.comment_id}</p>
                        <p>Author {comment.author}</p>
                        <p>Article ID:  {comment.article_id}</p>
                        <p>Created on: {comment.created_at}</p>
                        <p>Votes:  {comment.votes}</p>
                    </div>
                )
            })}

        </section>
    )
};

export default ArticleComments