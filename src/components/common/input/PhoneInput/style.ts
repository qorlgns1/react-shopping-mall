import styled from 'styled-components';
import iconSelectBoxArrow from '../../../../assets/icon/icon-down-arrow.svg';

interface SelectBoxStateType {
  selectBoxClicked: boolean;
}

export const Wrapper = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  color: #767676;
`;

export const PhoneNumberWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex: 1 1 0px;
  position: relative;
`;

export const SelectBox = styled.button<SelectBoxStateType>`
  width: 100%;
  padding: 13px 14px;
  color: #000;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  cursor: pointer;
  position: relative;

  /* 말줄임 추가 */
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    background-image: url(${iconSelectBoxArrow});
    top: 50%;
    transform: ${(props) =>
      props.selectBoxClicked
        ? 'translateY(-50%) rotate(180deg)'
        : 'translateY(-50%) rotate(0deg)'};
    width: 22px;
    height: 22px;
    right: 13px;
  }
`;

export const SelectBoxList = styled.ul<SelectBoxStateType>`
  margin-top: 6px;
  padding: 0;
  display: ${(props) => (props.selectBoxClicked ? 'block' : 'none')};
  width: 38%;
  max-height: 150px;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 51px;
  background: #fff;
  border: 1px solid #c4c4c4;
  box-shadow: 4px 4px 14px rgba(0, 0, 0, 0.15);
  border-radius: 10px;

  & > li > button {
    display: block;
    height: 40px;
    width: 100%;
    border: none;
    background-color: #fff;
    /* border-radius: 8px; */
    padding: 10px 0;
    cursor: pointer;
    font-size: 16px;
    line-height: 20px;

    /* 말줄임 추가 */
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;

    &:hover {
      background-color: #c4c4c4;
      color: white;
    }
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 54px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;

  /* input[type='number'] 우측 상하 화살표 버튼 없애기 */
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
