import { TextField } from '@mui/material'
import { UserInfo } from '../../utils/types/UserInfo'
import { FormErrors } from '../../utils/types/FormErrors'
import { Card } from '../../utils/types/Card'

type Props = {
    name: string
    label: string
    newEntity: UserInfo | Card
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    errors: FormErrors
    isOptional?: boolean
    type?: string
    otherProps?: Object
}

type OptionalProps = {
    required?: boolean
    error?: boolean
    helperText?: string
}

const TextFieldText = ({
    name,
    label,
    newEntity,
    handleInputChange,
    errors,
    isOptional,
    type,
    otherProps,
}: Props) => {
    const propsList: OptionalProps = !isOptional
        ? {
              required: true,
              error: errors[name],
              helperText: errors[name] ? 'This field is required' : undefined,
          }
        : {}

    return (
        <TextField
            name={name}
            label={label}
            type={type}
            fullWidth
            variant="standard"
            value={newEntity[name]}
            onChange={handleInputChange}
            {...propsList}
            {...otherProps}
        />
    )
}

export default TextFieldText
