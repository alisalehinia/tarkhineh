'use client';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '70vh',
  color: '#fff',
  backgroundColor:"#000"
};

const CarouselComponent: React.FC = () => (
  <Carousel autoplay className='rounded overflow-hidden shadow'>
    <div>
      <h3 className='branch_hero_image_1'>1</h3>
    </div>
    <div>
      <h3 className='branch_hero_image_2'>2</h3>
    </div>
    <div>
      <h3 className='branch_hero_image_3'>3</h3>
    </div>
  </Carousel>
);

export default CarouselComponent;