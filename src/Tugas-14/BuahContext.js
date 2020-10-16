import React, { useState, useEffect, createContext } from 'react'
import axios from 'axios'

export const BuahContext = createContext()

export const recordKosong = {
    id: null,
    name: "",
    price: 0,
    weight: 0,
}
export const API_URL = 'http://backendexample.sanbercloud.com/api'
export const BuahProvider = (props) => {
    const [produkBuah, setProdukBuah] = useState(null)
    const [recordBuah, setRecordBuah] = useState(recordKosong)
    const [isAlert, setAlert] = useState(false)

    useEffect(() => {
        if (produkBuah === null) {
            buahLoad();
        }
    }, [produkBuah])

    const buahLoad = () => {
        axios.get(`${API_URL}/fruits`)
            .then(res => {
                let dataBuah = res.data
                setProdukBuah(dataBuah)
                setAlert('')
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    return (
        <BuahContext.Provider value={{
            produkBuahContext: [produkBuah, setProdukBuah],
            recordBuahContext: [recordBuah, setRecordBuah],
            alertContext: [isAlert, setAlert],
            API_URL, recordKosong
        }}>
            {props.children}
        </BuahContext.Provider>
    )
}