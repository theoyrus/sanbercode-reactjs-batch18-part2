import React from 'react'
import { BuahProvider } from './BuahContext'
import BuahForm from './BuahForm'
import BuahList from './BuahList'

const Buah = () => {
    return (
        <BuahProvider>
            <BuahList />
            <BuahForm />
        </BuahProvider>
    )
}

export default Buah