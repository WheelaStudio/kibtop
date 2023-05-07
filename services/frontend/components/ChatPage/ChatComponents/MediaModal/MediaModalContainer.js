import { useModalOpen } from "../../../AppHooks/useModalOpen";
import MediaModal from "./MediaModal";

const MediaModalContainer = () => {
    const [isOpen, setOpen, switchOpen] = useModalOpen()

    return <MediaModal {...{isOpen, switchOpen}} />;
}

export default MediaModalContainer;