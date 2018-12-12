import React from 'react'
import Hero from '../sections/hero/Hero'
import SimpleSection from '../sections/simpleSection/SimpleSection'

export default (props) => {
    return (
        <React.Fragment>
            <Hero>
                <h1>My projects</h1>
            </Hero>
            <SimpleSection>
                <h3><a href="https://shop-app-trunghq.herokuapp.com" target="_blank">Online Shop Manage App</a></h3>
                <h5>Tech Stack:</h5>
                <p>
                    <ul>
                        <li>Server: ExpressJS</li>
                        <li>View: Pug engine, HTML, CSS, jQuery, AJAX</li>
                        <li>Database: MongoDB + Mongoose</li>
                        <li>User Authentication: PassportJS, JWT</li>
                        <li>Other modules: Async, </li>
                    </ul>
                </p>
            </SimpleSection>
        </React.Fragment>
    )
}
