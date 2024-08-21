import ImageCropper from '../ImageCropper/ImageCropper';
import styles from './modal.module.css';
import { IoCloseSharp } from "react-icons/io5";

const Modal = ({ updateAvatar, closeModal }) => {
    return (
        <div className={styles["modal-comp"]} >
            <div className={styles["modal-content"]}>
                <button className={styles["close-button"]} type="button" onClick={closeModal}>
                    <IoCloseSharp />
                </button>

                <ImageCropper
                    updateAvatar={updateAvatar}
                    closeModal={closeModal}
                />
            </div>
        </div>
    );
};

export default Modal;
