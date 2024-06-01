import { Grid } from '@mui/material';
import { Box, Container } from '@mui/system';
import React, { PropsWithChildren } from 'react';

export interface Props extends PropsWithChildren {}

const PageContainer: React.FC<Props> = ({ children }) => {
    return (
        <Box
            component="main"
            sx={{
                flexGrow: 1,
            }}
        >
            <Container maxWidth="xl">
            <Grid container>

                {children}
            </Grid>
                </Container>
        </Box>
    );
};

export default PageContainer;
