import React from 'react';
// import logo from './logo.svg';
import './App.css';

function App() {
  const styleKolom = { "display": "block", "margin-bottom": "1em", marginTop: "20px", "margin-left": "35%", "text-align": "left" }
  const styleKolomName = { "display": "inline-block", "width": "150px", "font-weight": "bold", "font-size": "16px" }
  const styleBlock = { "display": "inline-block" }
  return (
    <div className="App">
      <div style={{ margin: "25px 5px", "border-radius": "10px", "border": "1px solid #000" }}>
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
    </div >
  );
}

export default App;
