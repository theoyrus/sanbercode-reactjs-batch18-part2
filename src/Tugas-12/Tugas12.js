import React, { Component } from 'react'
import './Tugas12.css';

class Tugas12 extends Component {
    constructor(params) {
        super(params)
        this.state = {
            produkBuah: [
                { nama: "Semangka", harga: 10000, berat: 1000 },
                { nama: "Anggur", harga: 40000, berat: 500 },
                { nama: "Strawberry", harga: 30000, berat: 400 },
                { nama: "Jeruk", harga: 30000, berat: 1000 },
                { nama: "Mangga", harga: 30000, berat: 500 }
            ],
            recordBuah: {},
            inputBuah: {},
            index: -1,
            inNama: '', inHarga: '', inBerat: ''
        }
        this.handleEdit = this.handleEdit.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // handleEdit = (event) => {
    handleEdit(event) {
        let index = event.target.value
        console.log(index, this.state.produkBuah[index])
        let recordBuah = this.state.produkBuah[index]

        this.setState({
            recordBuah, index,
            // inNama: recordBuah.nama,
            // inHarga: recordBuah.harga,
            // inBerat: recordBuah.berat,
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target
        let recordBuah = this.state.recordBuah
        console.log(name, value, recordBuah)
        recordBuah[name] = value
        console.log(name, value, recordBuah)

        this.setState({
            // recordBuah,
            inNama: recordBuah.nama,
            inHarga: recordBuah.harga,
            inBerat: recordBuah.berat,
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        let index = this.state.index
        let recordBuah = this.state.recordBuah
        console.log('submit', index)
        if (index === -1) {
            // tambah
            let produkBuah = [...this.state.produkBuah, recordBuah]
            recordBuah = { nama: '', harga: '', berat: '' }
            this.setState({
                produkBuah,
                recordBuah,
                index: -1
            })
        } else {
            // edit
            let produkBuah = this.state.produkBuah
            produkBuah[index] = this.state.recordBuah
            recordBuah = { nama: '', harga: '', berat: '' }
            this.setState({
                produkBuah,
                recordBuah,
                index: -1
            })
        }
    }

    handleDelete = (event) => {
        let index = event.target.value
        this.state.produkBuah.splice(index, 1)
        let produkBuah = this.state.produkBuah
        let recordBuah = { nama: '', harga: '', berat: '' }
        this.setState({
            produkBuah, index: -1, recordBuah
        })
    }

    render() {
        const styleKolom = { "display": "block", marginBottom: "1em", marginTop: "20px", marginLeft: "25%", textAlign: "left" }
        const styleKolomName = { "display": "inline-block", "width": "150px", fontWeight: "bold", fontSize: "16px" }
        const styleBlock = { "display": "inline-block" }
        return (
            <>
                <hr />
                Tugas 10
                <hr />
                <div className="div_tengah w50">
                    <h1>Tabel Harga Buah</h1>

                    <table className="tabel10">
                        <thead>
                            <tr>
                                <td>Nama</td>
                                <td>Harga</td>
                                <td>Berat</td>
                                <td>Aksi</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.produkBuah.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.nama}</td>
                                            <td>{item.harga}</td>
                                            <td>{(item.berat / 1000)} kg</td>
                                            <td className="td_action">
                                                <button value={index} onClick={this.handleEdit}>Edit</button>
                                                <button value={index} onClick={this.handleDelete}>Hapus</button>
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
                    <form onSubmit={this.handleSubmit}>
                        <div style={styleKolom}>
                            <div style={styleKolomName}>
                                Nama Buah
                        </div>
                            <input value={this.state.recordBuah.nama} onChange={this.handleChange} required style={styleBlock} type="text" name="nama" placeholder="Nama Buah" />
                            {/* <input value={this.state.inNama} onChange={this.handleChange} required style={styleBlock} type="text" name="nama" placeholder="Nama Buah" /> */}
                        </div>
                        <div style={styleKolom}>
                            <div style={styleKolomName}>
                                Harga Buah
                        </div>
                            <input value={this.state.recordBuah.harga} onChange={this.handleChange} required style={styleBlock} type="number" name="harga" placeholder="Nominal Angka" />
                            {/* <input value={this.state.inHarga} onChange={this.handleChange} required style={styleBlock} type="number" name="harga" placeholder="Nominal Angka" /> */}
                        </div>
                        <div style={styleKolom}>
                            <div style={styleKolomName}>
                                Berat Buah
                        </div>
                            <input value={this.state.recordBuah.berat} onChange={this.handleChange} required style={styleBlock} type="number" name="berat" placeholder="X gram" />
                            {/* <input value={this.state.inBerat} onChange={this.handleChange} required style={styleBlock} type="number" name="berat" placeholder="X gram" /> */}
                        </div>
                        <div style={styleKolom}>
                            <div style={styleBlock}>
                                <button type="submit" style={{ borderRadius: "5px" }}>Simpan</button>
                            </div>
                        </div>
                    </form>
                </div >

            </>
        )
    }
}

export default Tugas12