import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import Photo from "./Photo";

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
      { shouldTouch: false, shouldValidate: true }
    );
  };

  const handleDragEnd = result => {
    if (!result.destination) {
      return;
    }

    const newUploads = Array.from(uploads);
    const [draggedUpload] = newUploads.splice(result.source.index, 1);
    newUploads.splice(result.destination.index, 0, draggedUpload);

    setUploads(newUploads);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="uploads" direction="horizontal">
        {(provided, snapshot) => (
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
            }}
            ref={provided.innerRef}
            {...provided.droppableProps}>
            {uploads.map((src, index) => (
              <Draggable
                key={index}
                draggableId={`upload-${index}`}
                index={index}
                direction="vertical">
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      userSelect: "none",
                      ...provided.draggableProps.style,
                    }}>
                    <Photo
                      src={src}
                      index={index}
                      deleteUpload={deleteUpload}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default PhotoUploadsContainer;
