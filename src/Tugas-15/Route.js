import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'

import FormTugas9 from '../Tugas-9/Tugas9';
import BuahTugas10 from '../Tugas-10/Tugas10';
import TimerTugas11 from '../Tugas-11/Tugas11';
import ProdukBuahTugas12 from '../Tugas-12/Tugas12';
import ProdukBuahTugas13 from '../Tugas-13/Tugas13';
import BuahTugas14 from '../Tugas-14/Buah';

// import Navbar from './Navbar'
import Tugas15 from './Tugas15'

const Routes = () => {
    return (
        <Router>
            <div>
                <Tugas15 />
                <Switch>
                    <Route path="/tugas-9">
                        <FormTugas9 />
                    </Route>
                    <Route path="/tugas-10">
                        <BuahTugas10 />
                    </Route>
                    <Route path="/tugas-11">
                        <TimerTugas11 />
                    </Route>
                    <Route path="/tugas-12">
                        <ProdukBuahTugas12 />
                    </Route>
                    <Route path="/tugas-13">
                        <ProdukBuahTugas13 />
                    </Route>
                    <Route path="/tugas-14">
                        <BuahTugas14 />
                    </Route>
                    <Route path="/">
                        <FormTugas9 />
                    </Route>
                </Switch>
            </div>
        </Router>

    )
}

export default Routes