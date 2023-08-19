import { Button, Grid, GridItem, Heading } from '@chakra-ui/react';

const Navbar = () => {
  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      w={'inherit'}
      h={'65px'}
      bg={'#032282'}
      pt={'25px'}
      pl={'16px'}
      pr={'16px'}
    >
      <GridItem>
        <Heading
          color={'#FFF'}
          m={0}
          mt={'10px'}
          fontSize={'18px'}
          fontWeight={500}
          lineHeight={'20px'}
        >
          Analytics dashboard
        </Heading>
      </GridItem>
      <GridItem textAlign={'end'}>
        <Button
          w={'87px'}
          h={'36px'}
          color={'#FFF'}
          bg={'#2D4696'}
          border={'none'}
          borderRadius={'10px'}
          p={'8px 24px'}
        >
          Menu
        </Button>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
