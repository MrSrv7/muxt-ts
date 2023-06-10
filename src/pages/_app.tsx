import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import "../style/global.css";
import createEmotionCache from "../utils/createEmotionCache";
import { ThemeProvider } from "../contexts/ThemeContext";
import BaseHeader from "@/layout/BaseHeader";
import { Container } from "@mui/material";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>MUXT TS</title>
      </Head>
      <ThemeProvider>
        <BaseHeader />
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 8,
            textAlign: "justify"
          }}
        >
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
