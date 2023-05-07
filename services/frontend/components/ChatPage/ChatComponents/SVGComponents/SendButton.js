import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

function SendButton() {
    const {watch, submit} = useFormContext()
    const {img, video, text} = watch()
    return (
        <button style={{cursor: "pointer"}} className="input-sendButton" disabled={!img && !video && !text} onClick={e => {
            e.preventDefault()
            submit()
        }}>
            <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.6181 2L6 25.254C6.5106 25.4991 7.07064 25.6279 7.63862 25.6308H11.6836C12.0219 25.6299 12.3466 25.7624 12.5851 
                        25.9987L14.7772 28.1564C15.966 29.3352 17.5828 29.9987 19.2698 30C19.9663 29.9994 20.658 29.8869 21.3177 29.6672C23.5922 28.9328 
                        25.2465 26.991 25.5859 24.6575L29.8948 4.50049C30.1005 3.6606 30.0027 2.77643 29.6181 2Z" />

                <path d="M25.5357 0.0987583L5.42599 4.39985C1.98994 4.8791 -0.412862 8.09557 0.0591964 11.584C0.245653 12.9616 0.870609 14.2397 
                        1.83886 15.2232L3.99668 17.4139C4.23254 17.6533 4.36495 17.9781 4.36471 18.3167V22.3615C4.3676 22.9294 4.49641 23.4895 4.74151 
                        24L28 0.383155C27.2357 0.00180777 26.3648 -0.0986694 25.5357 0.0987583Z" />
            </svg>
        </button>

    );
}

export default SendButton;