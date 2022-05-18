import Box from '@mui/material/Box';

export default function Demo() {

    return (
        <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
            bgcolor: '#F8F8F8',
            }}
        >
        <iframe src="https://hf.space/embed/ldonald3/feather-classifier/+" frameBorder="0" height="100%" width="100%" title="Gradio app" class="container p-0 flex-grow space-iframe" allow="accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking" sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"></iframe>
        {/*<iframe src="https://hf.space/embed/ldonald3/feather-classifier/+" frameBorder="0" height="600" width="900" title="Gradio app" class="container p-0 flex-grow space-iframe"></iframe>*/}
        </Box>
    )
}