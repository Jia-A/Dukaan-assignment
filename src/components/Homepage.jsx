import React, { useEffect, useState} from 'react'
import "../styles/homepage.css"
import "../custom.css"

function Homepage() {
    const [quotesData, setQuotes] = useState([])
    async function fetchQuotes(){
        const response = await fetch("https://dummyjson.com/quotes?limit=18")
        const data = await response.json()
        console.log(data.quotes)
        if(data && data.quotes) {
        setQuotes(data.quotes) }
    }
    useEffect(()=>{fetchQuotes()}, [])
  return (
    <article className='main-cont'>
        <div className='main-div'>
            <span className='slogan-head'>Free slogan maker</span>
            <p className='slogan-desc'>Simply enter a term that describes your business, and get up to 1,000 relevant slogans for free.</p>
            <label name="slogan-word" className='slogan-word'>
                Word for your slogan
            </label>
            <input type="text" name="" className='slogan-inp'/>
            <button className="generate-btn">Generate slogans</button>
            <div className="section-parting"></div>
            <div className='flex between'>
                <h5 className='result-head'>We have generated 1023 slogans for "cozy"</h5>
                <button className='download-btn'>Download all</button>
            </div>
            <div className='all-slogans'>
                {quotesData.map((item)=>(
                    <div className='slogan-cont'>
                        {item.quote}
                    </div>
                ))}    
            </div>
            <div className="section-parting bottom"></div>
        </div>
    </article>

  )
}

export default Homepage