import React, { useContext } from 'react'
import { BuahContext } from './BuahContext'
import axios from 'axios'
import '../Tugas-12/Tugas12.css'

const BuahList = () => {
    const { produkBuahContext, recordBuahContext, alertContext, API_URL, recordKosong } = useContext(BuahContext)
    const [produkBuah, setProdukBuah] = produkBuahContext
    const [, setRecordBuah] = recordBuahContext
    const [isAlert, setAlert] = alertContext

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
                    setProdukBuah(null)
                })
                .catch(err => {
                    setAlert(`Maaf, kendala koneksi (Err: ${err})`)
                })
        }
    }

    return (
        <>
            <hr />
                Tugas 14
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
        </>
    )
}

export default BuahList