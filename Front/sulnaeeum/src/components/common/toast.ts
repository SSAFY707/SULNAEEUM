import { toast } from 'react-toastify'

export const toastError = (content: string, icon : string) => {
    return (
        toast.error(content, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: icon,
            })
    )
}

export const toastOK = (content: string, icon : string) => {
    return (
        toast.info(content, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "colored",
            icon: icon,
            })
    )
}