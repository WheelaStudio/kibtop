import { useTransition } from "react";
import { useEffect, useState } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import style from "./media_uploads.module.scss"

const MediaUploads = () => {
    const [upload, setUpload] = useState(null)
    const [type, setType] = useState(null)
    const [isPending, startTransition] = useTransition()

    const {setValue} = useFormContext()
    const img = useWatch({name: 'img'})
    const video = useWatch({name: 'video'})


    useEffect(() => {
        const isImg = !!(img?.length > 0)
        const isVideo = !!(video?.length > 0)

        if(!isImg && !isVideo) {
            setUpload(null)
            setType(null)
            return
        }
        if(isImg && isVideo) return console.log('Двойная загрузка - ошибка!');
    

        const readFile = () => {
            // let fileReader = new FileReader()
            // const loadHandler = e => {
                
            //     // startTransition(() => setUpload(e.currentTarget.result))
            //     fileReader.removeEventListener('load', loadHandler)
            //     fileReader = undefined
            // }

            // fileReader.addEventListener('load', loadHandler)

            if(isVideo) {
                setType('video')
                startTransition(() => setUpload(window.URL.createObjectURL(video[0])))
            } else {
                setType('img')
                startTransition(() => setUpload(window.URL.createObjectURL(img[0])))
            }
            

        }

        readFile()
    }, [img?.length, video?.length, img, video])

    return (
        <>
            {
                (!!upload && !!type) && <>
                    <div className={style.media}>
                        <div className={style.upload}>
                            <button className={style.uploadClose} onClick={e => {
                                    e.preventDefault()
                                    setValue('img', null)
                                    setValue('video', null)
                                    setUpload(null)
                                    setType(null)
                                }}>
                                <svg viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.1682 1.3934L11.2132 9.34835L3.25825 1.3934C2.52602 0.661169 1.33883 0.661169 0.606602 1.3934C-0.125626 2.12563 -0.125626 3.31282 0.606602 4.04505L8.56155 12L0.606602 19.955C-0.125626 20.6872 -0.125626 21.8744 0.606602 22.6066C1.33883 23.3388 2.52602 23.3388 3.25825 22.6066L11.2132 14.6517L19.1682 22.6066C19.9004 23.3388 21.0876 23.3388 21.8198 22.6066C22.552 21.8744 22.552 20.6872 21.8198 19.955L13.8649 12L21.8198 4.04505C22.552 3.31282 22.552 2.12563 21.8198 1.3934C21.0876 0.661169 19.9004 0.661169 19.1682 1.3934Z" />
                                </svg>

                            </button>
                            {
                                isPending ? <>
                                    Loading...
                                </> : <>
                                    {
                                        type === "video" ? <>
                                        <video className={style.uploadFile}>
                                            <source src={upload} />
                                        </video>
                                        </> : <>
                                            <img src={upload} className={style.uploadFile} alt="" />
                                        </>
                                            }
                                </>
                                    
                            }
                            
                        </div>
                    </div>
                </>
            }
            
        </>
    );
}

export default MediaUploads;