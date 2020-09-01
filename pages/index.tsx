import React, { useState } from 'react';
import Layout from '../Components/Layout';
import { NextPage } from 'next';
import Head from "next/head";
import Navigation from '../Components/Navigation';
import { observer } from "mobx-react";
import db from "../libs/db";
import { TBots, TUsers } from '../types/types';
import {get} from "../libs/get";

export type Props = {
    bots: TBots[],
    users: TUsers[]
};

const Home: NextPage<Props> = (props) => {
    console.log('data', props);
    const { bots, users } = props;
    const [ activeId, setActiveId ] = useState(0);


    return (
        <>
            <Head>
                <title>Test application</title>
            </Head>
            <Navigation
                bots={bots}
                activeId={activeId}
                onClick={ (id) => {
                setActiveId(id)
            }} />
            <Layout slug='home'>
                <h1>Messenger with bots</h1>
                <button onClick={() => {
                    get('answer').then(
                        (data) => {
                            console.log("data: ", data)
                    }
                    );
                }}>Click me</button>
                <ul>

                </ul>

            </Layout>
        </>
    )
}

export const getStaticProps = async ({ query }) => {
    // db.firestore().collection('chat').doc('chat').set({
    //     bots: [
    //         {
    //             id: 0,
    //             name: 'Vanya',
    //             img: 'https://lh3.googleusercontent.com/proxy/_2OCZ5q2ZfhI_HjrXFX0XXgOpX08qGh2JGZc2IiubK7KjQ70wkQPTxH1cXPRQ5pQI7kEIgZ9oDRtfgIfC9r2YgE4t1bJX9JVDs5UMfHTF7xKeU8J8wL9o8A'
    //         },
    //         {
    //             id: 1,
    //             name: 'Vanya',
    //             img: 'https://a.wattpad.com/useravatar/men-da-daisuke.256.191360.jpg'
    //         },
    //         {
    //             id: 2,
    //             name: 'Vanya',
    //             img: 'https://i.pinimg.com/originals/dd/61/fd/dd61fd42381d655ce897ade6493b198c.jpg'
    //         },
    //         {
    //             id: 3,
    //             name: 'Vanya',
    //             img: 'https://pbs.twimg.com/profile_images/737359467742912512/t_pzvyZZ_400x400.jpg'
    //         },
    //         {
    //             id: 4,
    //             name: 'Vanya',
    //             img: 'https://pbs.twimg.com/profile_images/703554305782054912/osSSydtK_400x400.jpg'
    //         },

    //     ]
    // });
    const doc =  await db.firestore()
        .collection('bots')
        .doc("lkIXMVssZbs1elASVEvQ")
        .get();

    return {
        props: {
            ...doc.data().collection
        }
    }
};


export default observer(Home);
