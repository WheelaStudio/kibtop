import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAdvertThunk, likeAdvertThunk, setFavoritesWarnOpen, setUserFavorites, setUserFavoritesThunk } from "../../../store/slices/FavoritesSlice";
import {FavoritesApi} from "../../../services/FavoritesApi"
import LikeButton from "./LikeButton";
import { useDeferredValue, useState } from "react";

const useLikeMutation = (advertId, category) => {
    const {isAuthed, userId} = useSelector(state => state.auth)
    const {favorites} = useSelector(state => state.favorites)

    const userFavorite = favorites.find(favorite => (
                                        favorite.advertId === advertId && 
                                        favorite.category === category
                                    )) || null
    const dispatch = useDispatch()

    const onSuccess = () => dispatch(setUserFavoritesThunk(userId))

    const addStateFavorite = () => {
        dispatch(setUserFavorites([
            ...favorites, {
                advertId, category, favouriteId: +(new Date())
            }
        ]))
    }

    const deleteStateFavorite = () => {
        dispatch(setUserFavorites([
            ...favorites.filter(favorite => (
                favorite.advertId !== advertId || 
                favorite.category !== category
            ))
        ]))
    }

    
    const like = useMutation(async () => await FavoritesApi.addFavoriteAdvert(advertId, category, userId), {
        onSuccess,
        onMutate: addStateFavorite,
        onError: deleteStateFavorite
    })

    const dislike = useMutation(async () => await FavoritesApi.deleteFavoriteAdvert(userFavorite.favouriteId, userFavorite.category, userFavorite.userId), {
        onSuccess,
        onMutate: deleteStateFavorite,
        onError: addStateFavorite,
    })
    
    const onLike = () => {
        isAuthed ? like.mutate(advertId, category, userId) : dispatch(setFavoritesWarnOpen(true))
    }
        

    const onDislike = () => {
        !!userFavorite ? dislike.mutate() : dispatch(setFavoritesWarnOpen(true))
    }

    return {
        onLike, onDislike, userFavorite,
        isLoading: like.isLoading || dislike.isLoading
    }

}

export default useLikeMutation;