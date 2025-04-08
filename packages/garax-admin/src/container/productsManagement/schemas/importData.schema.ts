// import * as yup from 'yup';
// import { ActiveDataImportRequest } from '../../../apis/callCenter/activeData/requests';
// import { Product } from '../../../apis/masterData/models';

// export interface ActiveDataImportFormField
//   extends Pick<ActiveDataImportRequest, 'modelId'> {
//   productId: Product['id'] | undefined;
//   activeDataFiles: File | undefined;
// }

// export const activeDataImportSchema: yup.ObjectSchema<ActiveDataImportFormField> =
//   yup.object({
//     modelId: yup.number().required(),
//     productId: yup.number(),
//     activeDataFiles: yup
//       .mixed<File>()
//       .test(
//         'isRequired',
//         'File chưa được Upload',
//         (value: File | undefined): boolean => {
//           return value !== null;
//         },
//       ),
//   });
