import { useRef, useState } from 'react';
import {
  Input,
  Label,
  PhoneNumberWrapper,
  SelectBox,
  SelectBoxList,
  Wrapper,
} from './style';

export default function PhoneInput({
  className,
  label,
  id,
  type = 'text',
}: any) {
  const [selectBoxClicked, setSelectBoxClicked] = useState(false);
  const selectBoxRef = useRef<any>(null);

  const selectBoxClick = () => {
    const root = document.querySelector('#root');

    !selectBoxClicked &&
      root?.addEventListener(
        'click',
        () => {
          setSelectBoxClicked(false);
        },
        { once: true },
      );

    setSelectBoxClicked((prev) => !prev);
  };

  const selectBoxListClick = (event: any) => {
    event.stopPropagation();

    if (event.target.nodeName === 'BUTTON') {
      selectBoxRef.current.textContent = event.target.textContent;
      setSelectBoxClicked((prev) => !prev);
    }
  };

  const handleChange = (event: any) => {
    const regex = /^[0-9]{0,4}$/;
    if (regex.test(event.target.value)) {
      // setInputValue(e.target.value);
    } else {
      const inputValue = event.target.value;
      event.target.value = inputValue.substring(0, inputValue.length - 1);
    }
  };

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <PhoneNumberWrapper>
        <SelectBox
          type='button'
          ref={selectBoxRef}
          selectBoxClicked={selectBoxClicked}
          onClick={selectBoxClick}
        >
          010
        </SelectBox>
        <SelectBoxList
          selectBoxClicked={selectBoxClicked}
          onClick={selectBoxListClick}
        >
          <li>
            <button type='button'>010</button>
          </li>
          <li>
            <button type='button'>011</button>
          </li>
          <li>
            <button type='button'>016</button>
          </li>
          <li>
            <button type='button'>017</button>
          </li>
          <li>
            <button type='button'>019</button>
          </li>
        </SelectBoxList>
        <Input type={type} id={id} onChange={handleChange} />
        <Input type={type} id={id} />
      </PhoneNumberWrapper>
    </Wrapper>
  );
}
