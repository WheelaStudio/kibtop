import { useFormContext } from "react-hook-form";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import { useSwipe } from "../../../AppHooks/useSwipe";
import PaperClip from "../SVGComponents/PaperClip";

function MediaModal({isOpen, switchOpen}) {
    const {t} = useLanguage()

    const {swipe, handleClose} = useSwipe({onClose: switchOpen, closeHeight: 170})

    const {register, setValue} = useFormContext()
    
    return (
        <>
            <PaperClip {...{isOpen, switchOpen}} />
            { isOpen &&
                <div className={"modal modal__media active"} {...swipe}>
                    <div className="decor__mediaModal" onClick={handleClose}></div>
                    <label className="container-button__mediaModal">
                        <span className="button__mediaModal">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.9157 7.43801L12.5133 2.10832C12.1584 1.7557 11.7361 1.47615 11.2709 1.28589C10.8056 1.09564 10.3067 0.998463 9.80311 1.00002H1.27778C0.93889 1.00002 0.613882 1.13286 0.374252 1.36932C0.134623 1.60578 0 1.92648 0 2.26089C0 2.59529 0.134623 2.916 0.374252 3.15246C0.613882 3.38891 0.93889 3.52176 1.27778 3.52176H9.80311C10.1418 3.52265 10.4665 3.65542 10.7065 3.89119L14.1654 7.30436H6.38889C4.69507 7.30636 3.07121 7.97121 1.8735 9.15307C0.675794 10.3349 0.00202893 11.9373 0 13.6087L0 23.6957C0.00202893 25.3671 0.675794 26.9694 1.8735 28.1513C3.07121 29.3332 4.69507 29.998 6.38889 30H16.6111C18.3049 29.998 19.9288 29.3332 21.1265 28.1513C22.3242 26.9694 22.998 25.3671 23 23.6957V13.6087C22.9979 12.1609 22.4916 10.7577 21.566 9.6343C20.6404 8.5109 19.3517 7.7355 17.9157 7.43801Z" fill="#414042"/>
                                <path d="M28.615 11.2742C28.2011 11.0598 27.7368 10.9682 27.2746 11.0098C26.8124 11.0513 26.3709 11.2244 26 11.5094L25 12.2761V25.7221L26 26.4888C26.3714 26.7736 26.8131 26.947 27.2755 26.9897C27.7379 27.0323 28.2028 26.9424 28.618 26.7302C29.0333 26.5179 29.3825 26.1916 29.6266 25.7879C29.8707 25.3841 30 24.9189 30 24.4442V13.5591C30.0012 13.084 29.8721 12.618 29.6273 12.2141C29.3825 11.8102 29.0318 11.4846 28.615 11.2742Z" fill="#414042"/>
                            </svg>
                        </span>

                        <span className="button__mediaModal__text">{t('Video')}</span>

                        <input  {...register('video', {
                                required: false,
                                onChange: (e) => {
                                    setValue('img', null)
                                    handleClose()
                                    console.log(e);
                                }

                            })}
                                type="file" accept="video/*" hidden={true} />

                    </label>
                    <label className="container-button__mediaModal">

                        <span className="button__mediaModal">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 4L20.2711 1.55733C19.9267 1.07441 19.486 0.683222 18.9823 0.413405C18.4786 0.143589 17.9252 0.00221739 17.3639 0L12.6361 0C12.0748 0.00221739 11.5214 0.143589 11.0177 0.413405C10.514 0.683222 10.0733 1.07441 9.72889 1.55733L8 4H22Z" fill="#414042"/>
                                <path d="M15 23C17.7614 23 20 20.7614 20 18C20 15.2386 17.7614 13 15 13C12.2386 13 10 15.2386 10 18C10 20.7614 12.2386 23 15 23Z" fill="#414042"/>
                                <path d="M23.75 6H6.25C4.59301 6.00201 3.00445 6.66806 1.83277 7.85207C0.661102 9.03607 0.00198482 10.6414 0 12.3158L0 23.6842C0.00198482 25.3586 0.661102 26.9639 1.83277 28.1479C3.00445 29.3319 4.59301 29.998 6.25 30H23.75C25.407 29.998 26.9956 29.3319 28.1672 28.1479C29.3389 26.9639 29.998 25.3586 30 23.6842V12.3158C29.998 10.6414 29.3389 9.03607 28.1672 7.85207C26.9956 6.66806 25.407 6.00201 23.75 6ZM15 24.9474C13.5166 24.9474 12.0666 24.5029 10.8332 23.6701C9.59985 22.8373 8.63856 21.6536 8.0709 20.2688C7.50325 18.8839 7.35472 17.36 7.64411 15.8898C7.9335 14.4197 8.64781 13.0692 9.6967 12.0093C10.7456 10.9494 12.082 10.2275 13.5368 9.9351C14.9917 9.64267 16.4997 9.79275 17.8701 10.3664C19.2406 10.94 20.4119 11.9114 21.236 13.1578C22.0601 14.4041 22.5 15.8694 22.5 17.3684C22.498 19.3779 21.7072 21.3044 20.3011 22.7253C18.895 24.1462 16.9885 24.9454 15 24.9474Z" fill="#414042"/>
                            </svg> 
                        </span>

                        <span className="button__mediaModal__text">{t('Photo')}</span>

                        <input  {...register('img', {
                                required: false,
                                onChange: () => {
                                    setValue('video', null)
                                    handleClose()
                                }
                                
                            })}
                                type="file" accept="image/*" hidden={true} />

                    </label>
                </div>
            }
        </>
    );
}

export default MediaModal;