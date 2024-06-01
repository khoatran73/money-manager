import PageContainer from '@/components/PageContainer';
import requestApi from '@/libs/requestApi';
import React, { useEffect } from 'react';
import _ from 'lodash';

export interface Props {}

const genPath = (num: number) => `https://static.moneylover.me/img/icon/icon_${num + 64 +58}.png`;
const arrSize = 143 - 64 - 59; //
const arr = Array.from({ length: arrSize }, (_, i) => i + 1);


const Test: React.FC<Props> = (props) => {
    const data = arr.map(genPath);

    return (
        <PageContainer>
            <div className="flex flex-col">
                {data.map((d) => {
                    return (
                        <a key={d} className="hover:underline">
                            <img src={d} alt="" />
                        </a>
                    );
                })}
            </div>
        </PageContainer>
    );
};

export default Test;
