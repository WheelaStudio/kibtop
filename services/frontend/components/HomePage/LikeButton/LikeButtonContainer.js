import { useMutation } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import { dislikeAdvertThunk, likeAdvertThunk, setFavoritesWarnOpen } from "../../../store/slices/FavoritesSlice";
import {FavoritesApi} from "../../../services/FavoritesApi"
import LikeButton from "./LikeButton";
import useLikeMutation from "./useLikeMutation";

const LikeButtonContainer = ({className, id, category}) => {

    const {onLike, onDislike, isLoading, userFavorite} = useLikeMutation(id, category)

    const onClick = !!userFavorite ? onDislike : onLike

    return <LikeButton {...{isLoading, className, userFavorite, onClick}} />;
}

export default LikeButtonContainer;