import { useNavigate } from 'react-router-dom'
import {
    Container,
    CssBaseline,
    Box,
    Avatar,
    Typography,
    Button,
} from "@mui/material";
import AodIcon from '@mui/icons-material/Aod';

const Home = () => {

    const navigate = useNavigate()
    return (
        <>
        <Container maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            mt: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#068" }} >
            <AodIcon />
          </Avatar>
          <Typography variant="h5">Welcome!</Typography>
          <Box sx={{ mt: 3 }}>
            <Typography variant="h6">This is the Anfegu DID platform MVP demo </Typography>
            <Button
              fullWidth
              variant="contained"
              sx={{ mt: 3, 
                    mb: 2, 
                    backgroundColor: "#068", 
                    '&:hover': {
                        backgroundColor: '#046',
                    }, 
                }}
              onClick={() => navigate('/login')}
            >
              Start Exploring!
            </Button>
          </Box>
        </Box>
      </Container>

        </>
    )
}

export default Home