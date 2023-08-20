import { Grid, GridItem, Button, HStack, Box, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

const Commission = ({ title, children }) => {
  return (
    <Grid bg={'#FFF'} borderRadius={'12px'} p={'11px 10px'}>
      <GridItem borderRadius={'10px'} bg={'#F6FAFF'} px={'8px'} pt={'24px'}>
        <HStack justifyContent={'space-between'}>
          <Text fontFamily={'Sora'} color={'#4F64A7'}>
            {title}
          </Text>
          <Button
            w={'77px'}
            h={'30px'}
            rightIcon={<ChevronDownIcon />}
            fontSize={'10px'}
            fontWeight={500}
            color={'#032282'}
          >
            More
          </Button>
        </HStack>
        <HStack gap={4} mt={'20px'}>
          <Box w={'50%'}>
            <Text color={'#4F64A7'} fontSize={'12px'} lineHeight={'15px'}>
              POS commission
            </Text>
            <Text
              mt={'1px'}
              fontFamily={'Sora'}
              color={'#032282'}
              fontSize={'16px'}
              fontWeight={600}
            >
              {children}
            </Text>
          </Box>
          <Box>
            <Text color={'#4F64A7'} fontSize={'12px'} lineHeight={'15px'}>
              Lotto commission
            </Text>
            <Text
              mt={'1px'}
              fontFamily={'Sora'}
              color={'#032282'}
              fontSize={'16px'}
              fontWeight={600}
            >
              {children}
            </Text>
          </Box>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Commission;
