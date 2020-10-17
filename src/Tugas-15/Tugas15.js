import React from 'react'
import { TemaProvider } from './TemaContext'
import Navbar from './Navbar'

const Tugas15 = () => {
    return (
        <TemaProvider>
            <Navbar />
        </TemaProvider>
    )
}

export default Tugas15