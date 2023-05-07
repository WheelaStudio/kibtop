import { useRef, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLanguage } from "../../../../locales/hooks/useLanguage";
import _ChatInputComponent from "../Inputs/_ChatInputComponent";
import MediaModal from "../MediaModal/MediaModal";
import MediaModalContainer from "../MediaModal/MediaModalContainer";
import PaperClip from "../SVGComponents/PaperClip";
import SendButton from "../SVGComponents/SendButton";
import MediaUploads from "./MediaUploads/MediaUploads";
import useCreateMessage from "./useCreateMessage";


function ChatInput() {
    const messageForm = useForm({mode: 'onChange'});
    const {handleSubmit, reset} = messageForm

    
    const createMessage = useCreateMessage()

    const submit = handleSubmit(data => {
        createMessage(data)
        reset()
    })

    return (
        <form className="chat-input">
            <FormProvider {...{...messageForm, submit}}>
                    <MediaUploads />
                    <div className="input-container">
                            <MediaModalContainer />

                            <_ChatInputComponent />

                            <SendButton />
                    </div>
            </FormProvider>
        </form>
    );
}

export default ChatInput;