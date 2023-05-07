import { useRouter } from "next/router"

const useHideMobilePages = () => {
    const {pathname} = useRouter()
    
    const excertedPaths = ['settings', 'archive', 'edit', 'advert', 'add_advert']
    
    const isExcerted = excertedPaths.some(path => pathname.split('/').includes(path) )

    const ExceptionStyle = isExcerted ? ' exception' : ''
    
    return ExceptionStyle
}

export default useHideMobilePages;