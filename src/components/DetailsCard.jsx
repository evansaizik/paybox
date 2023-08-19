import { Grid, GridItem, Text, HStack, Image } from '@chakra-ui/react';
import chevronImage from './Assets/Group 8985.svg';
const DetailsCard = ({ title, children }) => {
  return (
    <Grid bg={'#FFF'} borderRadius={'12px'} p={'11px 14px'}>
      <GridItem borderRadius={'10px'} bg={'#F6FAFF'} px={'14px'} pt={'24px'}>
        <Text fontSize={'14px'} fontFamily={'Sora'} color={'#4F64A7'}>
          {title}
        </Text>
        <Text
          mt={'22px'}
          pb={'12px'}
          fontFamily={'Sora'}
          color={'#032282'}
          fontSize={'20px'}
          fontWeight={600}
        >
          {children}
        </Text>
      </GridItem>
      <HStack ml={'10px'} h={'40px'}>
        <Text color={'#032282'} fontSize={'14px'}>
          View details
        </Text>
        <Image src={chevronImage} alt="arrow" />
      </HStack>
    </Grid>
  );
};

export default DetailsCard;
