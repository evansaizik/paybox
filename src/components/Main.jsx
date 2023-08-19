import { Grid } from '@chakra-ui/react';
import WalletCard from './WalletCard';
import DetailsCard from './DetailsCard';
import TransactionCard from './TransactionCard';

const Main = () => {
  return (
    <Grid
      w={'100%'}
      gap={4}
      templateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}
      pt={{ base: '16px', md: '32px' }}
      px={{ base: '16px', md: '30px' }}
    >
      <WalletCard />
      <DetailsCard title={'Total saving balance'}>₦194,000</DetailsCard>
      <DetailsCard title={'total customers'}>₦919</DetailsCard>
      <DetailsCard title={'Total POS'}>0</DetailsCard>
      <TransactionCard title={'Total transfers'}>₦1,200,000</TransactionCard>
      <TransactionCard title={'Total inflows'}>₦1,200,000</TransactionCard>
      <TransactionCard title={'Total transactions'}>₦1,200,000</TransactionCard>
      <TransactionCard title={'transactions count'}>200</TransactionCard>
      <TransactionCard title={'transactions count'}>200</TransactionCard>
    </Grid>
  );
};

export default Main;
