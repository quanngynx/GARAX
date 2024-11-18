import SuccessPayment from '../../components/payment/success'
import FailedPayment from '../../components/payment/failed'
export const PAYOS = {
  RETURN_URL: window.location.origin,
  ELEMENT_ID: "embeded-payment-container",
  CHECKOUT_URL: "",
  embedded: true,
  onSuccess: <SuccessPayment />
};
