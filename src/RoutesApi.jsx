import axios from 'axios'

const ncNewsApi = axios.create({
    //baseURL: 'https://nc-news-project-jz57.onrender.com/'
    baseURL: 'http://localhost:9090/'

})

//Get list of all articles
export const getArticles = () => {
    return ncNewsApi
        .get(`/api/articles`)
        .catch((err) => {
            console.log(err)
        })
};

//Get an individual article by ID
export const getArticleByID = (article_id) => {
    return ncNewsApi
        .get(`/api/articles/${article_id}`)
        .catch((err) => {
            console.log(err)
        })
};

//Get comments for given article
export const getArticleComments = (article_id) => {
    return ncNewsApi
        .get(`/api/articles/${article_id}/comments`)
        .catch((err) => {
            console.log(err)
        })
};

export const getTopics = () => {
    return ncNewsApi
        .get(`/api/topics`)
        .catch((err) => {
            console.log(err)
        })
};

export const getArticlesForTopic = (topic) => {
    return ncNewsApi
        .get(`/api/topics/${topic}`)
        .catch((err) => {
            console.log(err)
        })
};

export const patchVote = (article_id) => {
    return ncNewsApi
        .patch(`/api/articles/${article_id}`, { "article_id": article_id, "inc_votes": 1 })
        .catch((err) => {
            console.log(err)
        })
} 