import React from "react";
import NewsCard from "components/NewsCard/NewsCard";
import { CardProps } from "components/NewsCard/NewsCard.interface";
import { NewsListProps } from "./NewsList.interface";
import styles from './news-list.module.css'




const NewsList: React.FC<NewsListProps> = ({news})=>{
    return(
        <div className={styles.list}>

            {
                news.map((item:CardProps)=>
                    <div className={styles.card}><NewsCard {...item}/></div>
                )
            }
            
        </div>
    )
}

export default NewsList