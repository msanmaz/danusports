import Layout from 'components/common/layout'
import Athlete from 'pages/Athlete';
import React from 'react'
import { BrowserRouter,Route,Routes,Outlet } from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route element={<Layout> <Outlet /> </Layout>}>
                <Route path="/" element={<p>Home</p>} />
            </Route>
            <Route element={<Layout> <Outlet /> </Layout>}>
                <Route path="/Home" element={<p>Athelete</p>} />
                </Route>
                <Route element={<Layout> <Outlet /> </Layout>}>
                <Route path="/Athlete" element={<Athlete/>} />
                </Route>
            </Routes>
            
        </BrowserRouter>

    )
}

export default App