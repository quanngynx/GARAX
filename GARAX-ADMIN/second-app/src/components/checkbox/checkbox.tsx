"use client";

import React from 'react';
import { Checkbox } from 'antd';
import type { CheckboxProps } from 'antd';

const onChange: CheckboxProps['onChange'] = (e) => {
  console.log(`checked = ${e.target.checked}`);
};

interface ICheckboxProps {
    label: string;
}

const CheckboxCustom: React.FC<ICheckboxProps> = ({ label }) => <Checkbox className='my-4' onChange={onChange}>{ label }</Checkbox>;

export default CheckboxCustom;