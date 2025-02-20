// import * as yup from 'yup';

// import { ActiveCreationRequest } from '../../../apis/callCenter/requests';
// import { transformUndefinedToEmptyString } from '../../../utils/transformToEmptyString';

// export const dataCreationSchema: yup.ObjectSchema<
//   Pick<
//     ActiveCreationRequest,
//     | 'dayBuy'
//     | 'modelId'
//     | 'customerId'
//     // | 'repairingDistrictId'
//     // | 'repairingCityId'
//     // | 'repairingWardId'
//     // | 'repairingStreet'
//     // | 'repairingAddressFull'
//     | 'phoneActive'
//     | 'serial'
//     | 'note'
//     | 'placePurchase'
//     // | 'customer'
//   >
// > = yup.object({
//   dayBuy: yup.string().required(),
//   placePurchase: yup.string().required(),

//   modelId: yup.number().required(),
//   customerId: yup.number(),

//   customer: yup.object<ActiveCreationRequest['customer']>({
//     id: yup.number(),
//     firstName: yup.string().required(),
//     lastName: yup.string().required(),
//     email: yup.string().optional().email().transform(transformUndefinedToEmptyString), 
//     phone1: yup.string(),
//     phone2: yup.string(),
//     cityId: yup.number().required(),
//     districtId: yup.number().required(),
//     wardId: yup.number().required(),
//     street: yup.string().optional().transform(transformUndefinedToEmptyString),
//     addressFull: yup.string().optional().transform(transformUndefinedToEmptyString),
//   }),

//   // repairingDistrictId: yup.number().required(),
//   // repairingCityId: yup.number().required(),
//   // repairingWardId: yup.number().required(),
//   // repairingStreet: yup.string().required(),
//   // repairingAddressFull: yup.string().required(),

//   phoneActive: yup.string().required(),
//   serial: yup.string().required().transform(transformUndefinedToEmptyString),

//   note: yup.string(),
// });
