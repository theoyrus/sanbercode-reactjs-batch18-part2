import React, { useContext } from 'react'
import { BuahContext } from './BuahContext'
import axios from 'axios'

const BuahForm = () => {
    const { produkBuahContext, recordBuahContext, alertContext, API_URL, recordKosong } = useContext(BuahContext)
    const [, setProdukBuah] = produkBuahContext
    const [recordBuah, setRecordBuah] = recordBuahContext
    const [, setAlert] = alertContext

    const handleChange = (ev) => {
        let { name, value } = ev.target
        setRecordBuah({ ...recordBuah, [name]: value })
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        if (recordBuah.id === null) {
            // tambah
            setAlert('Menambah data ...')
            axios.post(`${API_URL}/fruits`, recordBuah)
                .then(res => {
                    setProdukBuah(null)
                    setRecordBuah(recordKosong)
                })
                .catch(err => {
                    setAlert(`Maaf, kendala koneksi (Err: ${err})`)
                })
        } else {
            // tambah
            setAlert('Memperbaharui data ...')
            axios.put(`${API_URL}/fruits/${recordBuah.id}`, recordBuah)
                .then(res => {
                    setProdukBuah(null)
                    setRecordBuah(recordKosong)
                })
                .catch(err => {
                    setAlert(`Maaf, kendala koneksi (Err: ${err})`)
                })
        }
    }

    const styleKolom = { "display": "block", marginBottom: "1em", marginTop: "20px", marginLeft: "25%", textAlign: "left" }
    const styleKolomName = { "display": "inline-block", "width": "150px", fontWeight: "bold", fontSize: "16px" }
    const styleBlock = { "display": "inline-block" }
    return (
        <>
            <div style={{ margin: "0 auto", marginTop: "15px", width: "50%", borderRadius: "10px", "border": "1px solid #000" }}>
                <h1 style={{ margin: "0 auto", marginTop: "50px" }}>Form Produk Buah</h1>
                <form onSubmit={handleSubmit}>
                    <div style={styleKolom}>
                        <div style={styleKolomName}>
                            Nama Buah
                        </div>
                        <input value={recordBuah.name} onChange={handleChange} required style={styleBlock} type="text" name="name" placeholder="Nama Buah" />
                    </div>
                    <div style={styleKolom}>
                        <div style={styleKolomName}>
                            Harga Buah
                        </div>
                        <input value={recordBuah.price} onChange={handleChange} required style={styleBlock} type="number" name="price" placeholder="Nominal Angka" />
                    </div>
                    <div style={styleKolom}>
                        <div style={styleKolomName}>
                            Berat Buah
                        </div>
                        <input value={recordBuah.weight} onChange={handleChange} required style={styleBlock} type="number" name="weight" placeholder="X gram" />
                    </div>
                    <div style={styleKolom}>
                        <div style={styleBlock}>
                            <button type="submit" style={{ borderRadius: "5px" }}>Simpan</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default BuahForm