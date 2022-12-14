import Head from 'next/head';
import Sidebar from '../components/Sidebar';
import Fullbody from '../components/Fullbody';
import { Container } from '@mui/material';
import styled from 'styled-components';

export default function Home() {
  return (
    <HeadContainer >
      <Head>
        <title>WhatsApp 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="https://icon-library.com/images/whatsapp-icon-images/whatsapp-icon-images-14.jpg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        
      </Head>
      <Sidebar/>
      
    </HeadContainer>
  )
}

const HeadContainer = styled.div`
  //background-image: linear-gradient(to right bottom, #4fc0e6, #32c5df, #20cad3, #2dcdc2, #48cfaf);
`;
