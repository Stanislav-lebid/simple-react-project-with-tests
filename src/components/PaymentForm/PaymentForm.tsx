import * as React from 'react'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import { Box, Button } from '@mui/material'
import { Card } from '../../utils/types/Card'
import { FormErrors } from '../../utils/types/FormErrors'
import { useState } from 'react'
import TextFieldText from '../TextFields/TextFieldText'

type Props = {
    handleNext: () => void
    handleBack: () => void
    activeStep: number
    newCard: Card
    setNewCard: React.Dispatch<React.SetStateAction<Card>>
}

const PaymentForm = ({
    handleBack,
    handleNext,
    activeStep,
    newCard,
    setNewCard,
}: Props) => {
    const [errors, setErrors] = useState<FormErrors>({
        cardName: false,
        cardNumber: false,
        expDate: false,
        cvv: false,
    })

    const addNewCard = () => {
        setNewCard(() => {
            return newCard
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() === '',
        }))

        setNewCard((prevCard) => ({
            ...prevCard,
            [name]: value,
        }))
    }

    const handleNextButtonClick = () => {
        const requiredFields = ['cardName', 'cardNumber', 'expDate', 'cvv']
        const newErrors: FormErrors = {
            cardName: false,
            cardNumber: false,
            expDate: false,
            cvv: false,
        }
        for (const field of requiredFields) {
            if (newCard[field].trim() === '') {
                newErrors[field] = true
            }
        }
        setErrors(newErrors)

        const areAllRequiredFieldsValid = requiredFields.every(
            (field) => newCard[field].trim() !== ''
        )

        if (areAllRequiredFieldsValid) {
            handleNext()
            addNewCard()
        }
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Payment method
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <TextFieldText
                        name="cardName"
                        label="Name on card"
                        newEntity={newCard}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldText
                        name="cardNumber"
                        label="Card number"
                        type="number"
                        newEntity={newCard}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldText
                        name="expDate"
                        label="Expiry date"
                        type="month"
                        newEntity={newCard}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextFieldText
                        name="cvv"
                        label="CVV"
                        type="number"
                        newEntity={newCard}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="secondary"
                                name="saveCard"
                                value="yes"
                            />
                        }
                        label="Remember credit card details for next time"
                    />
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
                    onClick={handleNextButtonClick}
                    sx={{ mt: 3, ml: 1 }}
                >
                    Next
                </Button>
            </Box>
        </>
    )
}

export default PaymentForm
