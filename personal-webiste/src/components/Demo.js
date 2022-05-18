import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Demo() {

    return (
        <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
            bgcolor: '#F8F8F8',
            }}
        >
        <Box display="flex">
        <iframe src="https://hf.space/embed/ldonald3/feather-classifier/+" frameBorder="0" height="600" title="Gradio app" class="container p-0 flex-grow space-iframe"></iframe>
        </Box>
        </Box>
    )
}