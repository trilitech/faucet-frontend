import type { AppProps } from 'next/app';
import { ThirdwebProvider } from '@thirdweb-dev/react';
require('dotenv').config();


import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
// import "primeflex/primeflex.css";
// import "primeicons/primeicons.css";
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      activeChain={{
        // === Required information for connecting to the network === \\
        chainId: 128123,
        // Array of RPC URLs to use
        rpc: ['https://node.ghostnet.etherlink.com'],

        // === Information for adding the network to your wallet (how it will appear for first time users) === \\
        // Information about the chain's native currency (i.e. the currency that is used to pay for gas)
        nativeCurrency: {
          decimals: 18,
          name: 'tez',
          symbol: 'XTZ',
        },
        shortName: 'etherlink testnet', // Display value shown in the wallet UI
        slug: 'etherlink testnet', // Display value shown in the wallet UI
        testnet: true, // Boolean indicating whether the chain is a testnet or mainnet
        chain: 'Etherlink Testnet', // Name of the network
        name: 'Etherlink Testnet', // Name of the network
      }}
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
    >
      <PrimeReactProvider>
        <Component {...pageProps} />
      </PrimeReactProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
