import React from 'react';
import { Box, Container, Flex, HeadOne, TypoOne } from '../atoms';

import { Register } from '../components';

const RigisterPage = () => {
  return (
    <Container>
      <Flex justifay='space-between'>
        <div>
          <HeadOne>Lorem ipsum dolor sit amet consectetur</HeadOne>
          <TypoOne>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
            saepe sint maxime vero voluptatum inventore quam ratione aliquam
            consequuntur cupiditate nostrum quia quis atque doloribus,
            voluptatibus unde libero voluptate eaque?
          </TypoOne>
        </div>
        <Box>
          <Register />
        </Box>
      </Flex>
    </Container>
  );
};

export default RigisterPage;
