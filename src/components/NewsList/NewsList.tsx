import React from "react";
import styles from './news-list.module.css'
import NewsCard from "../NewsCard/NewsCard";
import { CardProps } from "../NewsCard/NewsCard.interface";
import { NewsListProps } from "./NewsList.interface";




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