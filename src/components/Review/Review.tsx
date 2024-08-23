import * as React from 'react'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Grid from '@mui/material/Grid'
import { products, total } from '../../utils/productsArray'
import { Box, Button } from '@mui/material'
import { UserInfo } from '../../utils/types/UserInfo'
import { Card } from '../../utils/types/Card'

type Props = {
    newUser: UserInfo
    newCard: Card
    handleNext: () => void
    handleBack: () => void
    activeStep: number
}

const Review = ({
    newUser: { firstName, lastName, address, city, zip, country },
    newCard: { cardName, cardNumber, expDate, cvv },
    handleBack,
    handleNext,
    activeStep,
}: Props) => {
    const payments = [
        { name: 'Card holder', detail: cardName },
        {
            name: 'Card number',
            detail: `xxxx-xxxx-xxxx-${cardNumber.slice(-4)}`,
        },
        { name: 'Expiry date', detail: expDate },
        { name: 'CVV', detail: cvv },
    ]

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Order summary
            </Typography>
            <List sx={{ m: '0 40px' }}>
                {products.map(({ name, desc, price }) => (
                    <ListItem key={name} sx={{ py: 1, px: 0 }}>
                        <ListItemText primary={name} secondary={desc} />
                        <Typography variant="body2">
                            $ {price.toFixed(2)}
                        </Typography>
                    </ListItem>
                ))}
                <ListItem sx={{ py: 1, px: 0 }}>
                    <ListItemText primary="Total" />
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                        $ {total()}
                    </Typography>
                </ListItem>
            </List>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Shipping
                    </Typography>
                    <Typography gutterBottom>
                        {firstName} {lastName}
                    </Typography>
                    <Typography gutterBottom>
                        {address}, {city}, {country}, {zip}
                    </Typography>
                </Grid>
                <Grid item container direction="column" xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Payment details
                    </Typography>
                    <Grid container>
                        {payments.map((payment) => (
                            <React.Fragment key={payment.name}>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography gutterBottom>
                                        {payment.detail}
                                    </Typography>
                                </Grid>
                            </React.Fragment>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
                {activeStep !== 0 && (
                    <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                    </Button>
                )}
                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 3, ml: 1 }}
                >
                    Place order
                </Button>
            </Box>
        </>
    )
}

export default Review
