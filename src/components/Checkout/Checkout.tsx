import * as React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Typography from '@mui/material/Typography'
import AddressForm from '../AddressForm/AddressForm'
import PaymentForm from '../PaymentForm/PaymentForm'
import Review from '../Review/Review'
import { useState } from 'react'
import { steps } from '../../utils/steps'
import { UserInfo } from '../../utils/types/UserInfo'
import { Card } from '../../utils/types/Card'

const Checkout = () => {
    const [activeStep, setActiveStep] = useState(0)

    const handleNext = () => {
        setActiveStep(activeStep + 1)
    }

    const handleBack = () => {
        setActiveStep(activeStep - 1)
    }

    const [newUser, setNewUser] = useState<UserInfo>({
        firstName: '',
        lastName: '',
        address: '',
        country: '',
        city: '',
        zip: '',
        state: '',
    })

    const [newCard, setNewCard] = useState<Card>({
        cardName: '',
        cardNumber: '',
        expDate: '',
        cvv: '',
    })

    const getStepContent = (step: number) => {
        switch (step) {
            case 0:
                return <AddressForm {...{ handleNext, newUser, setNewUser }} />
            case 1:
                return (
                    <PaymentForm
                        {...{
                            handleBack,
                            handleNext,
                            activeStep,
                            newCard,
                            setNewCard,
                        }}
                    />
                )
            case 2:
                return (
                    <Review
                        {...{
                            newUser,
                            newCard,
                            handleBack,
                            handleNext,
                            activeStep,
                        }}
                    />
                )
        }
    }

    return (
        <>
            <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                <Paper
                    variant="outlined"
                    sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
                >
                    <Typography component="h1" variant="h4" align="center">
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? (
                        <>
                            <Typography variant="h5" gutterBottom>
                                Thank you for your order.
                            </Typography>
                            <Typography variant="subtitle1">
                                Your order number is #2001539. We have emailed
                                your order confirmation, and will send you an
                                update when your order has shipped.
                            </Typography>
                        </>
                    ) : (
                        <>{getStepContent(activeStep)}</>
                    )}
                </Paper>
            </Container>
        </>
    )
}

export default Checkout
