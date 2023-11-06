import styles from './News-card.module.css'
import { CardProps } from './NewsCard.interface'
import { Link } from 'react-router-dom'



const NewsCard: React.FC<CardProps>=({id, title, content, publishDate, img})=>{
    return(
        <div className={styles.card}>
        <img src={img} alt='#' />
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardInfo}>{content}</p>
            <span className={styles.date}>{publishDate}</span>
            <Link to={`/article/${id}`} className={styles.readMore}>Read more</Link>
        </div>
    </div>
    )
}

export default NewsCard