import { useCallback, useState } from "react";
// import { useNavigate } from 'react-router-dom'
import { useDropzone } from "react-dropzone";
import styles from "../styles/Home.module.css";

function mediaProduct() {
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
    acceptedFiles.forEach((file) => {
      setSelectedImages((prevState) => [...prevState, file]);
    });
  }, []);

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone();

  const handleNavivateToUnplash = () => {
    window.open('https://unsplash.com/');
  }
  return (
    <div className="w-[40%] mr-8">
      <div className="">
        <div className="flex flex-col">
          <label className="mb-2 text-gray-700">Hình ảnh</label>

          <div className={styles.container}>
            <div className={styles.dropzone} {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop file(s) here ...</p>
              ) : (
                <p>Kéo hoặc thả tệp ở đây, hoặc nhấn để chọn tệp</p>
              )}
            </div>
            <div className={styles.images}>
              {selectedImages.length > 0 &&
                selectedImages.map((image, index) => (
                  <img
                    src={`${URL.createObjectURL(image)}`}
                    key={index}
                    alt=""
                  />
                ))}
            </div>
          </div>
        </div>

        <div className="">
          <button className="mt-4 mb-2.5 hover:font-bold" onClick={handleNavivateToUnplash}>
            Tùy chọn thư viện hình ảnh
          </button>
          <p className="">
            Donec luctus metus nec enim imperdiet, in dignissim risus fringilla.
            Fusce bibendum vulputate scelerisque. Donec in nunc quam.
            Suspendisse at lorem eleifend
          </p>
        </div>

        <div className="flex flex-col mt-4">
          <label className="mb-2 text-gray-700">Mô tả sản phẩm</label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="..."
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default mediaProduct;
