import Header from '../Header/Header'
import NewsCard from '../NewsCard(demo)/NewsCard'

export default function App(){

    return (
        <>
            <Header/>
            <NewsCard id={1} title='NewsCard 1' content='some information to make sure that there is content'
                publishDate='23 04 2023' img='https://www.bing.com/images/search?view=detailV2&ccid=Wytlw5Am&id=A06A52DE11B3C4A651365B088568BE95B03EB92A&thid=OIP.Wytlw5AmN2HoCJ_kLGF1EgHaF7&mediaurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.5b2b65c390263761e8089fe42c617512%3frik%3dKrk%252bsJW%252baIUIWw%26riu%3dhttp%253a%252f%252fimages5.fanpop.com%252fimage%252fphotos%252f28000000%252frandomised-random-28065165-1024-819.jpg%26ehk%3d5EwtKjhNaCpv2WoxrGQ6hQfUGbEnlkAb3g5OZSIKIhc%253d%26risl%3d%26pid%3dImgRaw%26r%3d0&exph=819&expw=1024&q=%d0%ba%d1%84%d1%82%d0%b2%d1%89%d1%8c+%d1%88%d1%8c%d1%84%d0%bf%d1%83&simid=607993857304516077&FORM=IRPRST&ck=1E73809EB97D2265CA19613EB200F15D&selectedIndex=0'
            />
        </>
    )
}