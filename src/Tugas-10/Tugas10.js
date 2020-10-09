import React, { Component } from "react";
import './Tugas10.css';

class BuahRecord extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.nama}</td>
                <td>{this.props.harga}</td>
                <td>{(this.props.berat / 1000)} kg</td>
            </tr>
        )
    }
}

class BuahTable extends Component {
    render() {
        return (
            <table className="tabel10">
                <thead>
                    <tr>
                        <td>Nama</td>
                        <td>Harga</td>
                        <td>Berat</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.records.map((item) => {
                            return (
                                <BuahRecord nama={item.nama} harga={item.harga} berat={item.berat} />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

class Tugas10 extends Component {
    render() {
        let dataHargaBuah = [
            { nama: "Semangka", harga: 10000, berat: 1000 },
            { nama: "Anggur", harga: 40000, berat: 500 },
            { nama: "Strawberry", harga: 30000, berat: 400 },
            { nama: "Jeruk", harga: 30000, berat: 1000 },
            { nama: "Mangga", harga: 30000, berat: 500 }
        ]
        return (
            <>
                <hr />
                Tugas 10
                <hr />
                <div className="div_tengah w50">
                    <h1>Tabel Harga Buah</h1>
                    <BuahTable records={dataHargaBuah} />
                </div>
            </>
        )
    }
}

export default Tugas10