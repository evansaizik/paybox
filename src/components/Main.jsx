import { Grid, GridItem } from '@chakra-ui/react';
import WalletCard from './WalletCard';
import DetailsCard from './DetailsCard';
import TransactionCard from './TransactionCard';
import Commission from './Commision';
import Count from './Count';
import PieChart from './PieChart';

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
      <Count title={'Total cashout'}>₦1,200,000</Count>
      <Count title={'Transaction status'}>422</Count>
      <Count title={'Average transaction Count'}>₦20,000</Count>
      <Commission title={'Total commission'}>₦87,000</Commission>
      <Commission title={'Average commission per transaction'}>₦500</Commission>
      <GridItem colStart={{lg: 2}} colEnd={{lg: 4}}>
        <PieChart />
      </GridItem>
    </Grid>
  );
};

export default Main;
