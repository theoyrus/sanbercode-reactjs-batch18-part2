import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../Tugas-12/Tugas12.css'

const API_URL = 'http://backendexample.sanbercloud.com/api'
const Tugas13 = () => {
    const recordKosong = {
        id: null,
        name: "",
        price: 0,
        weight: 0,
    }
    const [produkBuah, setProdukBuah] = useState(null)
    const [recordBuah, setRecordBuah] = useState(recordKosong)
    const [isAlert, setAlert] = useState(false)

    useEffect(() => {
        buahLoad();
    }, [])

    const buahLoad = () => {
        setAlert('Memuat data ...')
        axios.get(`${API_URL}/fruits`)
            .then(res => {
                let dataBuah = res.data
                setProdukBuah(dataBuah)
                setAlert('')
            })
            .catch(err => {
                console.log(err.message)
                setAlert('Maaf ada kendala koneksi')
            })
    }

    const handleEdit = (ev) => {
        setRecordBuah(produkBuah[ev.target.value])
    }

    const handleDelete = (ev) => {
        let id = ev.target.value
        let buahNama = produkBuah.filter(el => el.id == id)[0]?.name
        console.log(buahNama)
        let isHapus = window.confirm(`Apakah yakin akan menghapus buah ${buahNama}?`)
        if (isHapus) {
            setRecordBuah(recordKosong)
            setAlert('Menghapus data ...')
            axios.delete(`${API_URL}/fruits/${id}`)
                .then(res => {
                    setAlert('')
                    buahLoad()
                })
                .catch(err => {
                    setAlert(`Maaf, kendala koneksi (Err: ${err})`)
                })
        }
    }

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
                    buahLoad()
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
                    buahLoad()
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
            <hr />
                Tugas 13
            <hr />
            <div className="div_tengah w50">
                <h1>Tabel Harga Buah</h1>

                {
                    isAlert !== '' && (<div className="alert" >{isAlert}</div>)
                }

                <table className="tabel10">
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Nama</td>
                            <td>Harga</td>
                            <td>Berat</td>
                            <td>Aksi</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            produkBuah !== null && produkBuah.map((item, index) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{(item.weight / 1000)} kg</td>
                                        <td className="td_action">
                                            <button value={index} onClick={handleEdit}>Edit</button>
                                            <button value={item.id} onClick={handleDelete}>Hapus</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>

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

export default Tugas13