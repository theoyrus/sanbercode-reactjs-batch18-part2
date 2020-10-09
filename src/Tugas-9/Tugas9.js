import React from 'react';

class Tugas9 extends React.Component {
    render() {
        const styleKolom = { "display": "block", "margin-bottom": "1em", marginTop: "20px", "margin-left": "25%", "text-align": "left" }
        const styleKolomName = { "display": "inline-block", "width": "150px", "font-weight": "bold", "font-size": "16px" }
        const styleBlock = { "display": "inline-block" }
        return (
            <>
                <hr />
            Tugas 9
                <hr />
                <div style={{ margin: "0 auto", marginTop: "15px", width: "50%", "border-radius": "10px", "border": "1px solid #000" }}>
                    <h1 style={{ margin: "0 auto", marginTop: "50px" }}>Form Pembelian Buah</h1>
                    <form>
                        <div style={styleKolom}>
                            <div style={styleKolomName}>
                                Nama Pelanggan
                        </div>
                            <input style={styleBlock} type="text" name="name" />
                        </div>
                        <div style={styleKolom}>
                            <div style={styleKolomName}>
                                Daftar Item
                        </div>
                            <div style={styleBlock}>
                                <input style={styleBlock} type="checkbox" name="name" />
                                <label> Semangka</label>
                                <br />
                                <input style={styleBlock} type="checkbox" name="name" />
                                <label> Jeruk</label>
                                <br />
                                <input style={styleBlock} type="checkbox" name="name" />
                                <label> Nanas</label>
                                <br />
                                <input style={styleBlock} type="checkbox" name="name" />
                                <label> Salak</label>
                                <br />
                                <input style={styleBlock} type="checkbox" name="name" />
                                <label> Anggur</label>
                                <br />
                            </div>
                        </div>
                        <div style={styleKolom}>
                            <div style={styleBlock}>
                                <button style={{ borderRadius: "10px" }}>Kirim</button>
                            </div>
                        </div>
                    </form>
                </div >
            </>
        );
    }
}

export default Tugas9