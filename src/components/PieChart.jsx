import { Box, Grid, GridItem, HStack, Image, Text } from '@chakra-ui/react';
import pieChart from './Assets/Group 27741.png';

const PieChart = () => {
  return (
    <Grid
      bg={'#FFF'}
      templateColumns={{ base: '1fr', lg: 'repeat(2, 1fr)' }}
      borderRadius={'12px'}
      p={'11px 10px'}
    >
      <GridItem borderRadius={'10px'} bg={'#F6FAFF'} px={'8px'} pt={'24px'}>
        <HStack justifyContent={'space-between'}>
          <Text fontFamily={'Sora'} color={'#4F64A7'}>
            Transaction Comparative
          </Text>
        </HStack>
        <Box mt={'20px'} w={'50%'}>
          <Text color={'#37474F'} fontSize={'12px'} lineHeight={'15px'}>
            Send money
          </Text>
          <Text
            mt={'1px'}
            fontFamily={'Sora'}
            color={'#032282'}
            fontSize={'16px'}
            fontWeight={600}
          >
            ₦105,000,000
          </Text>
        </Box>
        <HStack gap={4} mt={'20px'}>
          <Box>
            <Text color={'#4F64A7'} fontSize={'12px'} lineHeight={'15px'}>
              Cashout
            </Text>
            <Text
              mt={'1px'}
              pb={'12px'}
              fontFamily={'Sora'}
              color={'#032282'}
              fontSize={'16px'}
              fontWeight={600}
            >
              ₦12,000,000
            </Text>
          </Box>
          <Box w={'50%'}>
            <Text color={'#4F64A7'} fontSize={'12px'} lineHeight={'15px'}>
              Utilities and Bills
            </Text>
            <Text
              mt={'1px'}
              pb={'12px'}
              fontFamily={'Sora'}
              color={'#032282'}
              fontSize={'16px'}
              fontWeight={600}
            >
              ₦4,200,000
            </Text>
          </Box>
        </HStack>
      </GridItem>
      <GridItem>
        <Box
        margin={'auto'}
          w={{ base: '100%', lg: '255px' }}
          h={{ base: '200px', lg: '100%' }}
        >
          <Image src={pieChart} alt="pie chart" />
        </Box>
      </GridItem>
    </Grid>
  );
};

export default PieChart;
