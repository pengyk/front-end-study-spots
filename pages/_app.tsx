import {useEffect, useState} from "react";
import dotenv from  'dotenv'

import '../styles/globals.css'
import Layout from "../components/Layout"
import type { AppProps } from 'next/app'
import { Auth0Provider } from '@auth0/auth0-react';
import { client } from "../config"

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientId = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;

function MyApp({ Component, pageProps }: AppProps) {

    return (
    <Auth0Provider clientId={clientId !== undefined ? clientId   : "missingClient"}
                   domain={domain !== undefined ? domain : " missingDomain"}
                   redirectUri={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Auth0Provider>

    )
}



export default MyApp
