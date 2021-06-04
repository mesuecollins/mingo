import makeCarousel from 'react-reveal/makeCarousel';
import Slide from 'react-reveal/Slide';
import styled from 'styled-components';

const width = '30em',
  height = '20em';

const Container = styled.div`
  border: 1px solid #000;
  position: relative;
  overflow: hidden;
  width: ${width};
`;
const Children = styled.div`
  width: ${width};
  position: relative;
  height: ${height};
`;

const Dot = styled.span`
  font-size: 1.5em;
  cursor: pointer;
  text-shadow: 1px 1px 1px #fff;
  user-select: none;
  color: #ff0054;
`;
const Dots = styled.span`
  text-align: center;
  width: ${width};
  z-index: 100;
`;
const CarouselUI = ({ position, total, handleClick, children }) => (
  <Container>
    <Children>{children}</Children>
    <Dots>
      {Array(...Array(total)).map((val, index) => (
        <Dot key={index} onClick={handleClick} data-position={index}>
          {index === position ? '● ' : '○ '}
        </Dot>
      ))}
    </Dots>
  </Container>
);

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Carousel = makeCarousel(CarouselUI);

const Slider = () => {
  return (
    <Carousel>
      <Slide right>
        <div>
          <Img src='https://images.pexels.com/photos/6621118/pexels-photo-6621118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' />
        </div>
      </Slide>
      <Slide right>
        <div>
          <h1>Slide 2</h1>
          <p>Slide Description</p>
        </div>
      </Slide>
    </Carousel>
  );
};

export default Slider;
