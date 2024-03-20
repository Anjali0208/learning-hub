import React from 'react'
import "./Banner.css"


function Banner() {
    return (
        <header className='banner'
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&dl=priscilla-du-preez-ggeZ9oyI-PE-unsplash.jpg&q=80&fm=jpg&crop=entropy&cs=tinysrgb")`,
                backgroundPosition: "center center",
            }}
        >
            <div className='banner_center'>
                <div className='banner_text'>
                    <p>Hello folks,</p>
                    <p>Welcome to easyNote!!</p>
                </div>

            </div>
        </header>

    )
}

export default Banner

