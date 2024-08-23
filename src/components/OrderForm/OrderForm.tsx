import { Box } from '@mui/material'
import Checkout from '../Checkout/Checkout'

type Props = {}

const OrderForm = (props: Props) => {
    return (
        <Box
            sx={{
                backgroundColor: '#E9F3F0',
                minHeight: '100vh',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center',
            }}
        >
            <Box sx={{ m: '60px 0 0 0' }}>
                <Checkout />
            </Box>
        </Box>
    )
}

export default OrderForm
