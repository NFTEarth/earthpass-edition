import type { AppProps } from "next/app";
import "../styles/globals.css";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import { ZksyncEra } from "@thirdweb-dev/chains";
import { ThirdwebProvider, useContract } from "@thirdweb-dev/react";

// This is the chain your dApp will work on.
const activeChain = "ZksyncEra";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={ ZksyncEra }>
      <Head>
        <title>NFTEarth 2023 Edition NFT Drop on zkSync Era</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="A celebratory NFT drop for the NFTEarth 2023 Edition on zkSync Era."
        />
        <meta
          name="keywords"
          content="NFTs, Layer2, NFTEartht, NFTE"
        />
      </Head>
      <Component {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
