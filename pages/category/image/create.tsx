import PageContainer from '@/components/PageContainer';
import CategoryImageForm from '@/sections/category/components/CategoryImageForm';
import { Card, Grid } from '@mui/material';
import React from 'react';

export interface Props {}

const create: React.FC<Props> = (props) => {
    return (
        <PageContainer>
            <Grid xs={12}>
                <Card sx={{ p: 2 }}>
                    <CategoryImageForm />
                </Card>
            </Grid>
        </PageContainer>
    );
};

export default create;
