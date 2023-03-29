import { toast, ToastPosition } from 'react-toastify'

export const toastError = (content: string, icon : string, position: ToastPosition) => {
    return (
        toast.error(content, {
            position: position,
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: icon,
            })
    )
}

export const toastOK = (content: string, icon : string, position: ToastPosition) => {
    return (
        toast.info(content, {
            position: position,
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: icon,
            })
    )
}