import { useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { joinPhoneNumberAtom } from '../../../../atoms';
import {
  Input,
  Label,
  PhoneNumberWrapper,
  SelectBox,
  SelectBoxList,
  Wrapper,
} from './style';

interface Props {
  className?: string;
  label: string;
  type?: string;
  id: never | string;
  register: UseFormRegister<any>;
}

export default function PhoneInput({
  className,
  label,
  id,
  type = 'text',
  register,
}: Props) {
  const setJoinPhoneNumber = useSetRecoilState(joinPhoneNumberAtom);
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
      setJoinPhoneNumber((prev) => {
        const [first, ...rest] = prev;
        return [event.target.textContent, ...rest]; // 휴대폰번호 맨앞 저장
      });

      selectBoxRef.current.textContent = event.target.textContent;
      setSelectBoxClicked((prev) => !prev);
    }
  };

  const handleChange = (event: any) => {
    let regex = /^[0-9]{0,4}$/;
    if (!regex.test(event.target.value)) {
      const inputValue = event.target.value;
      event.target.value = inputValue.substring(0, inputValue.length - 1);
      return;
    }

    if (event.target.id === 'phoneNumberMiddle') {
      setJoinPhoneNumber((prev) => {
        const [first, middle, last] = prev;
        return [first, event.target.value, last];
      });
    } else {
      setJoinPhoneNumber((prev) => {
        const [first, middle, last] = prev;
        return [first, middle, event.target.value];
      });
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
        <Input
          type={type}
          id={`${id}Middle`}
          {...register(`${id}Middle`, {
            required: {
              value: true,
              message: `${label}(을)를 입력해주세요.`,
            },
          })}
          onChange={handleChange}
        />
        <Input
          type={type}
          id={`${id}Last`}
          {...register(`${id}Last`, {
            required: {
              value: true,
              message: `${label}(을)를 입력해주세요.`,
            },
          })}
          onChange={handleChange}
        />
      </PhoneNumberWrapper>
    </Wrapper>
  );
}
