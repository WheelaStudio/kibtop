import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import PhotoUploads from "../PhotoUploads/PhotoUploads";

const PhotoUploadsContainer = () => {
  const { watch, setValue } = useFormContext();
  const { photos } = watch();

  const [uploads, setUploads] = useState([]);

  useEffect(() => {
    setUploads([]);

    photos?.map(img => {
      const fileReader = new FileReader();
      fileReader.onload = e => {
        const src = e.currentTarget.result;
        setUploads(uploads => [...uploads, src]);
      };
      fileReader.readAsDataURL(img);
    });
  }, [photos]);

  const deleteUpload = index => {
    setValue(
      "photos",
      photos.filter((upload, uploadIndex) => uploadIndex !== index),
      { shouldTouch: true, shouldValidate: true }
    );
  };

  const handleDragStart = e => {
    e.dataTransfer.setData(
      "text/plain",
      e.currentTarget.getAttribute("data-index")
    );
  };

  const handleDragOver = e => {
    e.preventDefault();
  };

  const handleDrop = e => {
    e.preventDefault();

    const draggedPhotoIndex = e.dataTransfer.getData("text/plain");
    const droppedPhotoIndex = e.currentTarget.getAttribute("data-index");

    const newPhotosOrder = [...photos];
    const draggedPhoto = newPhotosOrder.splice(draggedPhotoIndex, 1)[0];
    newPhotosOrder.splice(droppedPhotoIndex, 0, draggedPhoto);

    setValue("photos", newPhotosOrder, {
      shouldTouch: true,
      shouldValidate: true,
    });
  };

  return (
    <PhotoUploads
      uploads={uploads}
      deleteUpload={deleteUpload}
      handleDragStart={handleDragStart}
      handleDragOver={handleDragOver}
      handleDrop={handleDrop}
    />
  );
};

export default PhotoUploadsContainer;
