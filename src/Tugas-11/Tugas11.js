import React, { Component } from 'react';

class Tugas11 extends Component {
    constructor(props) {
        super(props)
        this.state = {
            jam: new Date(),
            timer: 100,
            isTampil: true,
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.detak(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    componentDidUpdate() {
        if (this.state.timer < 0) {
            this.componentWillUnmount()
        }
    }

    detak() {
        this.setState({
            jam: new Date(),
            timer: this.state.timer - 1,
            isTampil: this.state.timer !== 0,
        })
    }

    render() {
        return (
            <>
                {
                    this.state.isTampil && (
                        <div>
                            <h1>sekarang jam {this.state.jam.toLocaleTimeString()} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; hitung mundur {this.state.timer}</h1>
                        </div>
                    )
                }
            </>
        )
    }
}

export default Tugas11