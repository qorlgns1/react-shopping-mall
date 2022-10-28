import React, { useEffect } from 'react';
import plusIcon from '../../../assets/icon/icon-plus-line.svg';
import minusIcon from '../../../assets/icon/icon-minus-line.svg';
import { Button, Display, Wrapper } from './style';

export default function Amount({ useRef, setAmount }: any) {
  const handleLeftClick = () => {
    const { current } = useRef;
    current.value < 1 ? (current.value = 0) : (current.value -= 1);
    setAmount(current.value);
  };

  const handleRightClick = () => {
    const { current } = useRef;
    current.value = parseInt(current.value) + 1;
    setAmount(current.value);
  };

  const handleChange = (e: any) => {
    const value = e.target.value;

    if (value) {
      e.target.value = parseInt(value) || 1;
      setAmount(e.target.value);
    }
  };

  useEffect(() => {
    useRef.current.value = 1;
  }, []);

  return (
    <Wrapper>
      <Button icon={minusIcon} onClick={handleLeftClick}>
        <span className='ir'>수량 빼기 버튼</span>
      </Button>
      <Display ref={useRef} onChange={handleChange} />
      <Button icon={plusIcon} onClick={handleRightClick}>
        <span className='ir'>수량 더하기 버튼</span>
      </Button>
    </Wrapper>
  );
}
