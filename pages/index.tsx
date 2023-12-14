import { ConnectWallet, useContract } from '@thirdweb-dev/react';
import styles from '../styles/Home.module.css';
import { NextPage } from 'next';
import { CONTRACT_ADDRESS } from '../constants/addresses';

const Home: NextPage = () => {
  const { contract } = useContract(CONTRACT_ADDRESS);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <ConnectWallet />
        <h1>Faucet App</h1>
      </div>
    </main>
  );
};

export default Home;
