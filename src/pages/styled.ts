import styled from 'styled-components';
import { red } from '@ant-design/colors';

import styledSystem from '@/assets/styledSystem';

export const AntProSlider = styled.div`
  .ant-carousel {
    margin-bottom: 10px;
  }
  .ant-carousel .slick-slide {
    text-align: center;
    height: 160px;
    line-height: 160px;
    background: ${red[0]};
    overflow: hidden;
  }
`;

export const AntTitle = styledSystem(styled.h2``);
