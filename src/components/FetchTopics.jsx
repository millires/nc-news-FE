import { useState } from 'react'
import { useEffect } from 'react'

import { getTopics } from './../RoutesApi'


const TopicsList = () => {


    console.log('>>>> topics list all')
    const [topics, setTopics] = useState([])

    useEffect(() => {
        getTopics()
            .then(({ data: { topics } }) => {
                setTopics(topics)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <section className="container">
            {topics.map((topic) => {
                return (
                    <div key={topic.slug} className="items  w3-teal" style={{display:'block'} } >
                        <p>Slug:   {topic.slug}</p>
                        <p>Description: {topic.description}</p>
                    </div>
                )
            })}

        </section>
    )
}

export default TopicsList