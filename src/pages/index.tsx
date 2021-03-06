import { Carousel } from 'antd'
import { useState } from 'react'

import * as Styled from '@/pages/styled'
import ContainerWrap from '@/assets/styledContainer'

const IndexPage = () => {
  const [toggleClass, setToggle] = useState(true)
  return (
    <ContainerWrap>
      <Styled.AntProSlider>
        <Styled.AntTitle fontSize={[2, 3, 4]}>Slider</Styled.AntTitle>
        <Carousel autoplay>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
        </Carousel>
        <Carousel autoplay>
          <div>
            <img alt="title" src="http://placekitten.com/1280/160" />
          </div>
          <div>
            <img alt="title" src="http://placekitten.com/1280/160" />
          </div>
          <div>
            <img alt="title" src="http://placekitten.com/1280/160" />
          </div>
          <div>
            <img alt="title" src="http://placekitten.com/1280/160" />
          </div>
        </Carousel>
        <Carousel autoplay>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
          <div>
            <img alt="title" src="https://picsum.photos/1280/160" />
          </div>
        </Carousel>
      </Styled.AntProSlider>
      <h2 onClick={() => setToggle(!toggleClass)} style={{ cursor: 'pointer' }}>
        Workplace
      </h2>
      {toggleClass && (
        <div>
          <p>那是一种内在的东西，他们到达不了，也无法触及的</p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
          <p>
            段落示意：蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。蚂蚁金服设计平台
            ant.design，用最小的工作量，无缝接入蚂蚁金服生态，提供跨越设计与开发的体验解决方案。
          </p>
        </div>
      )}
    </ContainerWrap>
  )
}

export default IndexPage
