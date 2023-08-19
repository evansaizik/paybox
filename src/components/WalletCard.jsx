import { Button, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react';
import eye from './Assets/eye.svg';

const WalletCard = () => {
  return (
    <Grid bg={'#032282'} borderRadius={'12px'} p={'23px 24px'}>
      <GridItem>
        <Text fontSize={'14px'} color={'#CDCDCD'}>
          Wallet Balance
        </Text>
        <HStack gap={'14px'}>
          <Text
            fontFamily={'Sora'}
            color={'#FFF'}
            fontSize={'20px'}
            fontWeight={600}
          >
            ₦50,000.00
          </Text>
          <Image src={eye} alt="view" />
        </HStack>
      </GridItem>
      <GridItem>
        <HStack mt={'18px'} gap={{base: 6, md: 4}}>
          <Button
            w={{ base: '112px', md: '100px' }}
            h={'40px'}
            color={'#FFF'}
            fontSize={'14px'}
            fontWeight={600}
            bg={'#2D4696'}
            border={'none'}
            borderRadius={'10px'}
            p={'10px 27px'}
          >
            Add fund
          </Button>
          <Button
            ml={'1px'}
            w={{ base: '112px', md: '100px' }}
            h={'40px'}
            color={'#FFF'}
            fontSize={'14px'}
            fontWeight={600}
            bg={'#2D4696'}
            border={'none'}
            borderRadius={'10px'}
            p={'10px 27px'}
          >
            Withdraw
          </Button>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default WalletCard;
