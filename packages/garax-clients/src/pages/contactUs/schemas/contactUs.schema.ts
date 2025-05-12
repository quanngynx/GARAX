import { AccountModel } from '@/api/models';
import * as yup from 'yup';

export interface ContactUsFormState extends Pick<AccountModel, 
| 'email'
| 'phone'
> {
    mainProblem: string;
    secondProblem: string;
    desc: string;
    problemFile?: File; 
}

export const contactUsSchema: yup.ObjectSchema<ContactUsFormState> = yup.object({
    mainProblem: yup.string().required('Tên đầy đủ là bắt buộc'),
    secondProblem: yup.string().required('Tên đầy đủ là bắt buộc'),
    email: yup.string().required('Tên đầy đủ là bắt buộc'),
    phone: yup.string().required('Tên đầy đủ là bắt buộc'),
    desc: yup.string().required('Tên đầy đủ là bắt buộc'),
    problemFile: yup.mixed<File>().test({
        name: 'isRequired',
        message: 'contactUsSchema_problemFile_required',
        test: (value?: File): boolean => {
          return value !== undefined;
        },
    }),
});