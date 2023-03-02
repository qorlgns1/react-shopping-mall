import { useRef, useState } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { joinPhoneNumberAtom } from '../../../../atoms';
import {
  Label,
  PhoneNumberWrapper,
  SelectBox,
  SelectBoxList,
  StyledBasicInput,
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
  const selectBoxRef = useRef<HTMLButtonElement>(null);

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

      if (selectBoxRef.current) {
        selectBoxRef.current.textContent = event.target.textContent;
      }

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
          {['010', '011', '016', '017', '019'].map((prefixNumber) => (
            <li>
              <button type='button'>{prefixNumber}</button>
            </li>
          ))}
        </SelectBoxList>
        <StyledBasicInput
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
        <StyledBasicInput
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
