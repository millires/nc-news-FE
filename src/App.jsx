import { useState } from 'react'
import { Route, Routes } from "react-router"

import './App.css'
import ArticlesList from './components/FetchArticles'
import ArticleContent from  './components/FetchArticleByID'
import Header from './components/Header'
import TopicsList from './components/FetchTopics'


function App() {

    return (
        <section>
            <Header />
            <Routes>
                <Route path="/api/articles" element={<ArticlesList />}></Route>
                <Route path="/api/articles/:id" element={<ArticleContent />}></Route>
                <Route path="/api/topics" element={<TopicsList />}></Route>

            </Routes>
        </section>
    )
}

export default App
