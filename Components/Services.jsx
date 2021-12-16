import React from 'react'
import Cards from './Cards'
import '../App.css'

function Services() {
    return (
        <div className='serv'>
            <h2> Our Services </h2>
                <div className='card-container'>
                    <Cards/>
                    <Cards/>
                    <Cards/>
                </div>
        </div>
    )
}

export default Services
