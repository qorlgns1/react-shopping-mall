import { EmailInputWrapper, Input, Label, Wrapper } from './style';

export default function EmailInput({
  className,
  label,
  id,
  type = 'text',
}: any) {
  const onChange = (event: any) => {
    const regex = /[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (regex.test(event.target.value)) {
      // setInputValue(e.target.value);
      console.log(123);
    } else {
      console.log(456);
      // const inputValue = event.target.value;
      // event.target.value = inputValue.substring(0, inputValue.length - 1);
    }
  };

  return (
    <Wrapper className={className}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <EmailInputWrapper>
        <Input type={type} id={id} />
        <div>@</div>
        <Input onChange={onChange} type={type} id={id} />
      </EmailInputWrapper>
    </Wrapper>
  );
}
