import React from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

export default function ImageLightbox({
    isOpen,
    image,
    onClose
}: {
    isOpen: boolean;
    image: string;
    onClose: () => void;
}) {
    if (!isOpen) return null;

    return (
        <Lightbox
            mainSrc={image}
            onCloseRequest={onClose}
            enableZoom={true}
        />
    );
}
