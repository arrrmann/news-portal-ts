import React from 'react'
import NewsList from '../../../components/NewsList/NewsList'
import { NewsListProps } from '../../../components/NewsList/NewsList.interface'

const MainPage: React.FC<NewsListProps> = ({news}) => {
    return (
        <div>
            <NewsList news={news}/>
        </div>
    )
}


export default MainPage
