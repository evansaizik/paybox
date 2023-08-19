import { Grid, GridItem } from '@chakra-ui/react';
import WalletCard from './WalletCard';
import DetailsCard from './DetailsCard';

const Main = () => {
  return (
    <Grid
      templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
      pt={{ base: '16px', md: '' }}
      px={'16px'}
    >
      <GridItem mt={'16px'}>
        <WalletCard />
      </GridItem>
      <GridItem mt={'16px'}>
        <DetailsCard title={'Total saving balance'}>₦194,000</DetailsCard>
      </GridItem>
      <GridItem mt={'16px'}>
        <DetailsCard title={'total customers'}>₦919</DetailsCard>
      </GridItem>
      <GridItem mt={'16px'}>
        <DetailsCard title={'Total POS'}>0</DetailsCard>
      </GridItem>
    </Grid>
  );
};

export default Main;
