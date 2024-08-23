import React from 'react'
import './App.scss'
import { CssBaseline } from '@mui/material'
import CustomToolbar from '../../components/Toolbar/Toolbar'
import OrderForm from '../../components/OrderForm/OrderForm'

const App = () => {
    return (
        <div className="App" style={{ minHeight: '100hv', minWidth: '100vw' }}>
            <CssBaseline />
            <CustomToolbar headerText="Complete order form" />
            <OrderForm></OrderForm>
        </div>
    )
}

export default App
