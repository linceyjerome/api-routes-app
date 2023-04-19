import { GetServerSideProps } from 'next';
import List from '../components/List';
import { Info } from '../interfaces';
import React from 'react';

type Props = {
    info: Info[];
};

export default function InfoList({ info }: Props) {
    return (
        <>
            <List info={info} />
        </>
    );
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const res = await fetch('http://localhost:3000/api/info');
    const info = await res.json();

    return {
        props: {
            info,
        },
    };
};
