import { toast } from "react-toastify";


const emailRegx = /\S+@\S+\.\S+/;
const mobileRegx = /(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;

class FormHelper {
    isEmpty(value) {
        return value.length === 0;
    }

    isMobile(value) {
        return mobileRegx.test(value);
    }

    isEmail(value) {
        return !emailRegx.test(value);
    }

    errorToast(message) {
        toast.error(message, { position: "top-center" });
    }

    successToast(message) {
        toast.success(message, { position: "top-center" })
    }


}

export const {
    isEmpty,
    isMobile,
    isEmail,
    errorToast,
    successToast,

} = new FormHelper();