import { Input } from 'antd';
import type { GetProps } from 'antd';

type OTPProps = GetProps<typeof Input.OTP>;

export function InputSKU() {
    const onChange: OTPProps['onChange'] = (text) => {
        console.log('onChange:', text);
      };
    
      const onInput: OTPProps['onInput'] = (value) => {
        console.log('onInput:', value);
      };
    
      const sharedProps: OTPProps = {
        onChange,
        onInput,
      };
    return ( 
        <Input.OTP formatter={(str) => str.toUpperCase()} {...sharedProps} />
     );
}