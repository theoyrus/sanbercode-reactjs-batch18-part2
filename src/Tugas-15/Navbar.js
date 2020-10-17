import React, { useContext } from 'react'
import {
    Link
} from 'react-router-dom'
import './Tugas15.css'
import { TemaContext } from './TemaContext'

const Navbar = (props) => {
    const { AppTemaContext } = useContext(TemaContext)
    const [tema, setTema] = AppTemaContext

    const onChangeToogle = (ev) => {
        setTema(tema == 'light' ? 'dark' : 'light')
    }

    return (
        <>
            <div className={`headbar ${tema}`}>
                <nav>
                    <div className="container">
                        <h1 className="title">React Sanber by <a href="https://github.com/theoyrus" target="_blank">@theoyrus</a></h1>
                        <div className="toggler-container">
                            <span role="img" aria-label="dark-mode">DARK🌑</span>
                            <div className="toggler" onClick={onChangeToogle}>
                                <div className="circle"></div>
                            </div>
                            <span role="img" aria-label="light-mode">LIGHT🌞</span>
                        </div>
                    </div>
                    <ul>
                        <li>
                            <Link to="/tugas-9">Tugas 9</Link>
                        </li>
                        <li>
                            <Link to="/tugas-10">Tugas 10</Link>
                        </li>
                        <li>
                            <Link to="/tugas-11">Tugas 11</Link>
                        </li>
                        <li>
                            <Link to="/tugas-12">Tugas 12</Link>
                        </li>
                        <li>
                            <Link to="/tugas-13">Tugas 13</Link>
                        </li>
                        <li>
                            <Link to="/tugas-14">Tugas 14</Link>
                        </li>
                    </ul>

                </nav>

                {/* <div className="container">
                </div> */}

            </div>
        </>
    )
}

export default Navbar