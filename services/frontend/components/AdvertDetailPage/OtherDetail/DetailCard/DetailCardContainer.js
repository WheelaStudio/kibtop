import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatApi } from "../../../../services/ChatApi";
import { setAdvertSellerThunk } from "../../../../store/slices/AdvertSlice";
import DetailCard from "./DetailCard";
import { useNewDialogMutation } from "./useNewDialogMutation";

const DetailCardContainer = ({serverAdvert}) => {
    const storeAdvert = useSelector(state => state.advert)
    const advert = !!storeAdvert.advertId ? storeAdvert : serverAdvert
    const {query} = useRouter()
    const {seller, userId} = advert
    const dispatch = useDispatch()

    useEffect(() => {
        if(!!userId) dispatch(setAdvertSellerThunk(userId))
    }, [userId])

    const auth = useSelector(state => state.auth)

    const createDialog = useNewDialogMutation({
        advertId: advert.advertId, 
        category: query.category, 
        userId: auth.userId, 
        sellerId: advert.userId 
    })

    const existedChat = useQuery(
        ['CHECK_EXISTING_CHAT', auth.userId], 
        () => ChatApi.checkExistingChat({userId: auth.userId, advertId: advert.advertId, category: query.category}),
        {
            enabled: !!auth.userId
        }
    )


    const ChatExist = {
        chatHref: !!existedChat.data && `/chat/${existedChat.data.chatId}`,
        isDisabled: !auth.isAuthed || createDialog.isLoading || auth.userId === advert.userId
    }

    return <DetailCard {...{...advert, phone: seller?.phone, auth, isLoading: createDialog.isLoading, createDialog, ChatExist}} />;
}

export default DetailCardContainer;