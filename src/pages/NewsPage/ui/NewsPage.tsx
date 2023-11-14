import React from 'react'
import { useParams } from 'react-router-dom'
import { NewsListProps } from '../../../components/NewsList/NewsList.interface'

const NewsPage: React.FC<NewsListProps> = ({ news }) => {
    const { id } = useParams()
    const articleID=Number(id)
    
    if(isNaN(articleID)){
        console.log('Error')
    }

    const article =news.find((item)=>item.id===articleID)
    if(!article){
        console.log('Article not found')
    }


    return (
        <div>
            <h1>{article?.title}</h1>
            <div>
                <img src={article?.img} alt={article?.title} />
            </div>
            <div>
                <p>{article?.content}</p>
                <span>{article?.publishDate}</span>
            </div>
        </div>
    )
}

export default NewsPage

