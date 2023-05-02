import clsx from 'clsx';
import React from 'react';
import { getSession, signIn } from 'next-auth/react';
import { NextPageContext } from 'next';

interface Props {}

export async function getServerSideProps(context: NextPageContext) {
    const session = await getSession(context);

    if (!!session) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

const Auth: React.FC<Props> = (props) => {
    return (
        <div className="w-screen h-screen select-none">
           <div className="w-full h-full flex items-center justify-center">
           <div className="w-96 h-96 bg-black bg-opacity-70 rounded-3xl">
                <div className="w-full h-full p-5">
                    <div className="font-semibold text-3xl w-full text-center">Login</div>
                    <div
                        className={clsx(
                            'mt-10 px-5 py-2 rounded-lg text-red-500 border border-red-500 cursor-pointer',
                            'hover:bg-red-500 hover:text-white duration-300 ease-in-out'
                        )}
                        onClick={() => signIn('google', { callbackUrl: '/' })}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <div>
                                Connect with google
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </div>
    );
};

export default Auth;
