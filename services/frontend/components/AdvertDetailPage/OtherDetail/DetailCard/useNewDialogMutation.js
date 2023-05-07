import { useMutation } from "@tanstack/react-query"
import { useRouter } from "next/router"
import { AdvertApi } from "../../../../services/AdvertApi"

export const useNewDialogMutation = ({advertId, category, userId, sellerId}) => {
    const {push} = useRouter()
    const redirect = chatId => push(`/chat/${chatId}`)

    const mutation = useMutation(['CreateNewDialog'], () => AdvertApi.createNewDialogByAdvert({advertId, category, userId, sellerId, redirect}))

    return mutation
}
