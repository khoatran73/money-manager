import CustomModal, { CustomModalRef } from '@/components/CustomModal';
import PageContainer from '@/components/PageContainer';
import CustomMenu from '@/components/menus/CustomMenu';
import useCategoryList from '@/hooks/useCategoryList';
import { PencilIcon } from '@heroicons/react/24/solid';
import { Avatar, Box, Card, Container, Divider, Grid, Stack, Typography } from '@mui/material';
import { green } from '@mui/material/colors';
import clsx from 'clsx';
import React, { useRef } from 'react';
import CategoryForm from '@/sections/category/components/CategoryForm';

export interface Props {}

const Category: React.FC<Props> = (props) => {
    const { data: categories = [], isLoading } = useCategoryList();
    const modalRef = useRef<CustomModalRef>(null);

    if (isLoading) return <></>;
    return (
        <PageContainer>
            <Stack
                spacing={3}
                direction="row"
                display={'flex'}
                justifyContent="space-between"
                sx={{ width: '100%' }}
            >
                <Grid xs={12} sm={12} md={4}>
                    <Card>
                        <Typography
                            variant="subtitle1"
                            sx={{ px: 2, py: 1 }}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <span>List category</span>
                            <div onClick={() => modalRef.current?.onOpen()}>create</div>
                        </Typography>
                        <Divider />
                        <CustomMenu
                            menus={[
                                {
                                    icon: <Avatar />,
                                    text: 'food and beverage',
                                    level: 0,
                                },
                                {
                                    icon: <Avatar />,
                                    text: 'transportation',
                                    level: 0,
                                },
                                {
                                    icon: <Avatar />,
                                    text: 'gas bill',
                                    level: 0,
                                },
                                {
                                    icon: <Avatar />,
                                    text: 'personel',
                                    children: [
                                        {
                                            icon: <Avatar />,
                                            text: 'iternet bill',
                                            level: 1,
                                        },
                                        {
                                            icon: <Avatar />,
                                            text: 'gg',
                                            level: 1,
                                            children: [
                                                {
                                                    icon: <Avatar />,
                                                    text: 'ceasdskj',
                                                    level: 2,
                                                },
                                            ],
                                        },
                                        {
                                            icon: <Avatar />,
                                            text: '123123',
                                            level: 1,
                                        },
                                    ],
                                },
                                {
                                    icon: <Avatar />,
                                    text: 'home maintain',
                                    level: 0,
                                },
                            ]}
                        />
                    </Card>
                </Grid>
                <Grid
                    md={8}
                    display={{ xs: 'none', sm: 'none', md: 'block' }}
                    style={{
                        position: 'sticky',
                        top: 80,
                        height: 'fit-content',
                    }}
                >
                    <Card>
                        <Typography
                            variant="h5"
                            sx={{ p: 2 }}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                        >
                            <div>Category detail</div>
                            <div className="p-2 rounded-full cursor-pointer hover:bg-red-200">
                                <PencilIcon
                                    className="h-4 w-4"
                                    style={{
                                        color: green?.[500],
                                    }}
                                />
                            </div>
                        </Typography>
                        <Divider />
                        <div className={clsx('w-full flex items-center py-6 px-10 ')}>
                            <Avatar alt="Remy Sharp" sx={{ width: 54, height: 54 }} />
                            <div className="ml-6">
                                <Typography variant="h6">category name</Typography>
                                <Typography variant="caption">wallet</Typography>
                                <Typography variant="body1">expense</Typography>
                            </div>
                        </div>
                    </Card>
                </Grid>
            </Stack>
            <CustomModal
                title="title"
                body={<CategoryForm />}
                footer={{
                    hasSaveButton: true,
                }}
                ref={modalRef}
                width="70%"
            />
        </PageContainer>
    );
};

export default Category;
