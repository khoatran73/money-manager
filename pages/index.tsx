import { Box, Container, Grid } from '@mui/material';
import Head from 'next/head';

const Home = () => {
    return (
        <>
           
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8,
                }}
            >
                <Container maxWidth="xl">
                    <Grid container spacing={1}>
                        <Grid xs={12} sm={6} lg={3}>
                            <>OverviewBudget</>
                            {/* <OverviewBudget
                                difference={12}
                                positive
                                sx={{ height: '100%' }}
                                value="$24k"
                            /> */}
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            {/* <OverviewTotalCustomers
                                difference={16}
                                positive={false}
                                sx={{ height: '100%' }}
                                value="1.6k"
                            /> */}
                            OverviewTotalCustomers
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            {/* <OverviewTasksProgress sx={{ height: '100%' }} value={75.5} /> */}
                            vOverviewTasksProgress
                        </Grid>
                        <Grid xs={12} sm={6} lg={3}>
                            {/* <OverviewTotalProfit sx={{ height: '100%' }} value="$15k" /> */}
                            OverviewTotalProfit
                        </Grid>
                        <Grid xs={12} lg={8}>
                            {/* <OverviewSales
                                chartSeries={[
                                    {
                                        name: 'This year',
                                        data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
                                    },
                                    {
                                        name: 'Last year',
                                        data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
                                    },
                                ]}
                                sx={{ height: '100%' }}
                            /> */}
                            OverviewSales
                        </Grid>
                        <Grid xs={12} md={6} lg={4}>
                            {/* <OverviewTraffic
                                chartSeries={[63, 15, 22]}
                                labels={['Desktop', 'Tablet', 'Phone']}
                                sx={{ height: '100%' }}
                            /> */}
                            OverviewTraffic
                        </Grid>
                        <Grid xs={12} md={6} lg={4}>
                            OverviewLatestProducts
                        </Grid>
                        <Grid xs={12} md={12} lg={8}>
                            OverviewLatestOrders
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Home;
