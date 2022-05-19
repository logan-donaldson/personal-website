import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';


import award from '../documents/award_certificate.pdf';
import paper from '../documents/dl_paper.pdf';

export default function Demo() {

    return (
        <>
            <Box
            height="85vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                bgcolor: '#F8F8F8',
                }}
            >
                <iframe src="https://hf.space/embed/ldonald3/feather-classifier/+" 
                frameBorder="0" 
                height="100%" 
                width="100%" 
                title="Gradio app" 
                class="container p-0 flex-grow space-iframe">
                </iframe> 
                
            </Box>
            <Divider></Divider>
            <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
                bgcolor: '#F8F8F8',
                }}
            > 
                <Typography variant="h6" align="center" color="text.secondary" width="80vw" paragraph>
                    This demo originates from my group's deep learning project titled "<b>Fine-grained Classification of Bird Species</b>"
                    which won the <a href={award} target='_blank' rel="noreferrer"> Intuitive Surgical Best Project Award</a>. 
                    We investigated the utility of both orderful and orderless second-order information for fine-grained image classification
                    tasks (FGIC). To this end we compared the effects of self-attention mechanisms and bilinear convolutional networks. Finally,
                    we proposed a novel architecture which aimed to leverage the dataset's hierarchical labeling to increase predictive context.
                    <a href={paper} target='_blank' rel="noreferrer"> Here</a> is a brief paper summarizing our approaches and results.
                </Typography>
            </Box>
        </>
    )
}