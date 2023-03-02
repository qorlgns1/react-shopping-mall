import styled from 'styled-components';
import iconSelectBoxArrow from '../../../../assets/icon/icon-down-arrow.svg';
import BasicInput from '../BasicInput';

interface SelectBoxStateType {
  selectBoxClicked: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 1rem;
  font-family: 'Spoqa Han Sans Neo';
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 2rem;
  color: #767676;
`;

export const PhoneNumberWrapper = styled.div`
  display: flex;
  gap: 1.2rem;
  flex: 1 1 0px;
  position: relative;
`;

export const SelectBox = styled.button<SelectBoxStateType>`
  width: 100%;
  padding: 1.3rem 1.4rem;
  color: #000;
  font-size: 1.6rem;
  line-height: 2rem;
  text-align: center;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 0.5rem;
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
    width: 2.2rem;
    height: 2.2rem;
    right: 1.3rem;
  }
`;

export const SelectBoxList = styled.ul<SelectBoxStateType>`
  margin-top: 0.6rem;
  padding: 0;
  display: ${(props) => (props.selectBoxClicked ? 'block' : 'none')};
  width: 38%;
  max-height: 15rem;
  overflow-y: scroll;
  position: absolute;
  left: 0;
  top: 5.1rem;
  background: #fff;
  border: 1px solid #c4c4c4;
  box-shadow: 0.4rem 0.4rem 1.4rem rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  z-index: 1;

  & > li > button {
    display: block;
    height: 4rem;
    width: 100%;
    border: none;
    background-color: #fff;
    padding: 1rem 0;
    cursor: pointer;
    font-size: 1.6rem;
    line-height: 2rem;

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

export const StyledBasicInput = styled(BasicInput)`
  width: 100%;

  > input {
    text-align: center;
    padding: 0;
  }
`;
