import React, { useState, useEffect } from "react"

interface Answer {
    _id: string;
    content: string;
    author: string;
    tags: string[];
    authorSlug: string;
    length: number;
    dateAdded: string;
    dateModified: string;
}

const TestWapi = () => {
    const [answer, setAnswer] = useState<Answer|null>(null)

    useEffect(() => {
        fetch("https://api.quotable.io/random").then(response => {
                if(response.ok){
                    return response.json()
                }
            }).then(data => {return setAnswer(data)})
            .catch(error => console.log(error.message))
    }, [])

    return (
        <>
            {answer? (
                <div>
                    <div>
                        Author: {answer.author}
                    </div>
                    <div>
                        Content: {answer.content}
                    </div>
                </div>
            ): <p>Loading...</p>}
        </>
    )
}

export default TestWapi
