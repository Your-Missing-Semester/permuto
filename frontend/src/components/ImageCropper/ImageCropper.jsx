import { React, useRef, useState } from "react";
import ReactCrop, {
    centerCrop,
    convertToPixelCrop,
    makeAspectCrop,
} from "react-image-crop";
import styles from './imagecropper.module.css'
import setCanvasPreview from "../SetCanvasPreview/SetCanvasPreview";

const ASPECT_RATIO = 1;
const MIN_DIMENSION = 200;

const ImageCropper = ({ closeModal, updateAvatar }) => {
    const imgRef = useRef(null);
    const previewCanvasRef = useRef(null);
    const [imgSrc, setImgSrc] = useState('');
    const [crop, setCrop] = useState();
    const [error, setError] = useState('');

    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imageUrl = reader.result?.toString() || "";
            const imageElement = new Image();
            imageElement.src= imageUrl;

            imageElement.addEventListener("load", (e) =>  {
                if (error) setError('');
                const { naturalWidth, naturalHeight } = e.currentTarget;
                if (naturalWidth < MIN_DIMENSION || naturalHeight < MIN_DIMENSION) {
                    setError("Image must be at least 200px x 200px.");
                    return setImgSrc('');
                };
            });

            setImgSrc(imageUrl);
        });
        reader.readAsDataURL(file);
    };

    const onImageLoad = (e) => {
        const { width, height } = e.currentTarget;
        const cropWidthInPercent = (MIN_DIMENSION/ width) * 100;
        const crop = makeAspectCrop(
            {
                unit: "%",
                width: cropWidthInPercent,
            }, ASPECT_RATIO,
            width,
            height
        );
        const centeredCrop = centerCrop(crop, width, height)
        setCrop(centeredCrop);
    }; 

    return (
        <div className={styles["comp-image-cropper"]}>
            <div className={styles["comp-choose-file"]}>
                <input 
                    className={styles["input-pfp"]}
                    type="file" 
                    accept="image/*"
                    onChange={onSelectFile} 
                />
            </div>

            {error && <p className={styles["image-error-msg"]}>{error}</p>}

            {imgSrc && 
                <div className="crop-user-profile"> 
                    <ReactCrop
                        crop={crop}
                        onChange={(pixelCrop, percentCrop)=>setCrop(percentCrop)}
                        keepSelection
                        minWidth={MIN_DIMENSION}
                        aspect={ASPECT_RATIO}
                    >
                        <img 
                            ref={imgRef}
                            src={imgSrc} alt="Upload" 
                            style={{maxHeight:"40vh"}} 
                            onLoad={onImageLoad} />
                    </ReactCrop>

                    <button 
                        className={styles["crop-button"]}
                        onClick={() => {
                            setCanvasPreview(
                                imgRef.current,
                                previewCanvasRef.current,
                                convertToPixelCrop(crop,
                                    imgRef.current.width,
                                    imgRef.current.height
                                )
                            );
                            const dataUrl = previewCanvasRef.current.toDataURL();
                            updateAvatar(dataUrl);
                            closeModal();
                        }}
                        > 
                        Crop Image 
                    </button>
                </div>
            }

            <div className={styles["preview-comp"]}>
                {crop && <canvas className={styles["canvas-comp"]} ref={previewCanvasRef}/>}
            </div>
        </div>
    );
};

export default ImageCropper;
