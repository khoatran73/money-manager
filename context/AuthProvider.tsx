import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import React from 'react';

export interface Props extends React.PropsWithChildren{}


export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

const AuthProvider: React.FC<Props> = ({children}) => {
    return <>{children}</>
};

export default AuthProvider;