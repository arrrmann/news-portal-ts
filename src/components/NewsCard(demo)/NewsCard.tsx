import styles from './News-card.module.css'


interface CardProps {
    id:number;
    title: string;
    content: string;
    publishDate:string;
    img: string;
}

const NewsCard: React.FC=({id, title, content, publishDate, img}:CardProps)=>{
    return(
        <div className={styles.card}>
        <img src={img} alt={id} />
        <div className={styles.cardContent}>
            <h2 className={styles.cardTitle}>{title}</h2>
            <p className={styles.cardInfo}>{content}</p>
            <span className={styles.date}>{publishDate}</span>
        </div>
    </div>
    )
}

export default NewsCard