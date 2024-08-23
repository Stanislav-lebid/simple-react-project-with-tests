import * as React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Box, Button } from '@mui/material'
import { useState } from 'react'
import { UserInfo } from '../../utils/types/UserInfo'
import { FormErrors } from '../../utils/types/FormErrors'
import TextFieldText from '../TextFields/TextFieldText'

type Props = {
    newUser: UserInfo
    setNewUser: React.Dispatch<React.SetStateAction<UserInfo>>
    handleNext: () => void
}

const AddressForm = ({ newUser, setNewUser, handleNext }: Props) => {
    const [errors, setErrors] = useState<FormErrors>({
        firstName: false,
        lastName: false,
        address: false,
        city: false,
        zip: false,
        country: false,
    })

    const addNewUser = () => {
        setNewUser(() => {
            return newUser
        })
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target

        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: value.trim() === '',
        }))

        setNewUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }))
    }

    const handleNextButtonClick = () => {
        const requiredFields = [
            'firstName',
            'lastName',
            'address',
            'city',
            'zip',
            'country',
        ]

        const newErrors: FormErrors = {
            firstName: false,
            lastName: false,
            address: false,
            city: false,
            zip: false,
            country: false,
        }
        for (const field of requiredFields) {
            if (newUser[field].trim() === '') {
                newErrors[field] = true
            }
        }
        setErrors(newErrors)

        const areAllRequiredFieldsValid = requiredFields.every(
            (field) => newUser[field].trim() !== ''
        )

        if (areAllRequiredFieldsValid) {
            handleNext()
            addNewUser()
        }
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="firstName"
                        label="First name"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="lastName"
                        label="Last name"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextFieldText
                        name="address"
                        label="Address line 1"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="city"
                        label="City"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="state"
                        label="State/Province/Region"
                        isOptional
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="zip"
                        label="Zip / Postal code"
                        type="number"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextFieldText
                        name="country"
                        label="Country"
                        newEntity={newUser}
                        {...{ errors, handleInputChange }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}
            >
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

export default AddressForm
