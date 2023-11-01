import Header from '../Header/Header'
//import NewsCard from '../NewsCard/NewsCard'
import NewsList from '../NewsList/NewsList'



export default function App() {
    const news = [
        {
            id: 1,
            title: 'New title 1',
            content: 'News Content 1',
            publishDate: (new Date().toDateString()),
            img: 'https://images.unsplash.com/photo-1631771970274-d7f0442bd28b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8&w=1000&q=80',
        },
        {
            id: 2,
            title: 'New title 2',
            content: 'News Content 2',
            publishDate: (new Date().toDateString()),
            img: 'https://imgv3.fotor.com/images/slider-image/a-man-holding-a-camera-with-image-filter.jpg',
            
        },
        {
            id: 3,
            title: 'New title 3',
            content: 'News Content 3',
            publishDate: (new Date().toDateString()),
            img: 'https://yourblogworks.com/wp-content/uploads/2016/07/Free-images-1024x683.jpg',
        },
        {
            id: 4,
            title: 'New title 4',
            content: 'News Content 4',
            publishDate: (new Date().toDateString()),
            img: 'https://img.freepik.com/premium-photo/hand-holding-camera-dslr-travel-river-sunset-holiday-travel-vintage_10541-1063.jpg',
        }
    ]

    const searchAutocomplete =[
        {
            text:'About trees news',
            rating:0.3
        },
        {
            text:'About plants news',
            rating:0.2
        },
        {
            text:'About tesla news',
            rating:0.5
        },
        {
            text:'About yerevan news',
            rating:0.2
        },
        {
            text:'About artsakh news',
            rating:0.1
        },
        {
            text:'About israel news',
            rating:0.9
        },
        {
            text:'About today news',
            rating:0.8
        },
        {
            text:'About tmorrow news',
            rating:0.5
        },
        {
            text:'About weather news',
            rating:0.2
        },
        {
            text:'About moon news',
            rating:0.7
        },
    ]
    
    return (
        <>
            <Header searchAutocomplete={searchAutocomplete}/>
            <NewsList news={news} />
        </>
    )
}