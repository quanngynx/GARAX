import * as yup from 'yup';

export interface IDataImportMixFormField {
  activeDataFiles: File | undefined;
}

export const activeDataImportMixSchema: yup.ObjectSchema<IDataImportMixFormField> =
  yup.object({
    activeDataFiles: yup
      .mixed<File>()
      .test(
        'isRequired',
        'File chưa được Upload',
        (value: File | undefined): boolean => {
          return value !== null;
        },
      ),
  });
