import React from 'react'
import Hero from '../sections/hero/Hero';
import SimpleSection from '../sections/simpleSection/SimpleSection';
import TwoCols from '../twoCols/TwoCols';
import styles from './Home.module.css'

export default (props) => {
    return (
        <main className={styles.Main}>
            <Hero>
                <h1>Hi there,<br />This is Trung.</h1>
                <h3>I'm a Javascript Developer living in Hanoi.</h3>
            </Hero>
            <SimpleSection>
                <TwoCols
                    left={
                        <h5>Languages</h5>
                    }
                    right={
                        <ul>
                            <li className={styles.Standout}>Javascript (ES6, async, this, closure)</li>
                            <li>HTML</li>
                            <li>CSS</li>
                        </ul>
                    } />
            </SimpleSection>
            <SimpleSection>
                <TwoCols
                    left={
                        <h5>Frameworks</h5>
                    }
                    right={
                        <ul>
                            <li className={styles.Standout}>NodeJS</li>
                            <li className={styles.Standout}>ExpressJS</li>
                            <li>Bootstrap 4</li>
                        </ul>
                    }
                />
            </SimpleSection>
            <SimpleSection>
                <TwoCols
                    left={
                        <h5>Libraries</h5>
                    }
                    right={
                        <ul>
                            <li className={styles.Standout}>ReactJS</li>
                            <li className={styles.Standout}>Mongoose</li>
                            <li>jQuery</li>
                        </ul>
                    }
                />
            </SimpleSection>
            <SimpleSection>
                <TwoCols
                    left={
                        <h5>Knowledge</h5>
                    }
                    right={
                        <ul>
                            <li>OOP</li>
                            <li className={styles.Standout}>Design Patterns</li>
                            <li className={styles.Standout}>SOLID Principles</li>
                            <li>Data Structure + Algorithm</li>
                        </ul>
                    } />
            </SimpleSection>
            <SimpleSection>
                <TwoCols
                    left={
                        <h5>Experience with</h5>
                    }
                    right={
                        <ul>
                            <li className={styles.Standout}>Git</li>
                            <li className={styles.Standout}>REST API</li>
                            <li className={styles.Standout}>NGINX server</li>
                        </ul>
                    } />
            </SimpleSection>
        </main>
    )
}
