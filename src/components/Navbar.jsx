import {
  Avatar,
  Box,
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import notification from './Assets/notification-bing.png';

const Navbar = () => {
  return (
    <Grid
      templateColumns={'repeat(2, 1fr)'}
      w={'inherit'}
      h={{ base: '65px', md: '111px' }}
      borderTopRadius={{ md: '30px' }}
      bg={{ base: '#032282', md: '#FFF' }}
      alignItems={'center'}
      pl={'16px'}
      pr={'16px'}
    >
      <GridItem>
        <Heading
          color={{ base: '#FFF', md: '#242424' }}
          m={0}
          fontSize={{ base: '18px', md: '24px' }}
          fontWeight={500}
          lineHeight={'20px'}
        >
          Analytics dashboard
        </Heading>
      </GridItem>
      <GridItem textAlign={'end'}>
        <Button
          display={{ md: 'none' }}
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
        <HStack justifyContent={'end'} gap={6} display={{ base: 'none', md: 'flex' }}>
          <Box
            py={'13px'}
            px={'13px'}
            bg={'#ECF1FF'}
            w={'45px'}
            h={'45px'}
            borderRadius={'50%'}
          >
            <Image src={notification} alt="notification" />
          </Box>
          <HStack gap={4}>
            <Avatar
              src="https://bit.ly/tioluwani-kolawole"
              name="Dexter Olaniyi"
            />
            <GridItem textAlign={'start'}>
              <Text fontWeight={600}>Dexter Olaniyi</Text>
              <Text fontSize={'10px'} color={'#818181'}>
                dexterolaniyi@gmail.com
              </Text>
            </GridItem>
          </HStack>
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Navbar;
