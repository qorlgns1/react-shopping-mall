import styled from 'styled-components';

type Props = {
  label: string;
};

const ImportantWord = ({ label }: Props) => {
  return <Important>{label}</Important>;
};

const Important = styled.span`
  font-weight: bold;
  text-decoration: underline;
  margin-left: 4px;
`;

export default ImportantWord;
