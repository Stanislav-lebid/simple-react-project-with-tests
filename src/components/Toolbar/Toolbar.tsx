import { Typography, Toolbar } from '@mui/material'

type Props = {
    headerText: string
}

const CustomToolbar = ({ headerText }: Props) => {
    return (
        <Toolbar
            sx={{
                backgroundColor: '#E0EAE7',
                width: '100%',
                borderBottom: '5px solid #D5E0DD',
            }}
        >
            <Typography
                variant="h5"
                component="div"
                sx={{
                    flexGrow: 1,
                    display: { xs: 'none', sm: 'block' },
                    textAlign: 'left',
                }}
            >
                {headerText}
            </Typography>
        </Toolbar>
    )
}

export default CustomToolbar
