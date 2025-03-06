"use client";

import { useState } from "react";
import Image from "next/image";
// import { useNavigate } from 'react-router-dom'
import { useDropzone } from "react-dropzone";
// import { useForm, Controller } from "react-hook-form";

import styles from "../styles/Home.module.css";
// import defaultValues from '../styles/Products.module.css'

// import classNames from "classnames";
// import dayjs from "dayjs";

// import { TValuesMediaProduct } from "../types";
import { UploadOutline } from "@/components/icons";

function SecondaryGroupColumn() {
    // const defaultValues: TValuesMediaProduct = {
    //     image1: "",
    //     image2: "",
    //     image3: "",
    //     image4: "",
    //     dimensions: "10 * 10 * 10",
    //     weight: 0.1,
    //     description: "",
    //     productName: "Sport Smart Watch",
    //     brandName: "Pineapple",
    //     regularPrice: 1000,
    //     salePrice: 800,
    //     productSchedule: [dayjs().startOf("week"), dayjs().endOf("week")],
    //     productSKU: "SKU-123456",
    //     qty: 100,
    // };
    const [ selectedImages ] = useState([]);

    //   const onDrop = useCallback((acceptedFiles: string[], rejectedFiles: unknown) => {
    //     acceptedFiles.forEach((file: string) => {
    //       setSelectedImages((prevState) => [...prevState, file]);
    //     });
    //   }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        // isDragAccept,
        // isDragReject,
    } = useDropzone();

    const handleNavivateToUnplash = () => {
        window.open("https://unsplash.com/");
    };

    // const {
    //     register,
    //     handleSubmit,
    //     control,
    //     formState: { errors },
    // } = useForm({
    //     defaultValues: defaultValues,
    // });

    return (
        <div className="w-[40%] border-[0.5px] border-solid border-slate-300 rounded-2xl px-[16px] py-[24px]">
            <div className="">
                <div className="flex flex-col">
                    <label className="text-gray-700">Hình ảnh</label>

                    <div className={styles.container}>
                        <div className={styles.dropzone} {...getRootProps()}>
                            <input {...getInputProps()} />
                            {isDragActive ? (
                                <p>Drop file(s) here ...</p>
                            ) : (
                                <div className="flex flex-col justify-center items-center">
                                    <UploadOutline ClassName="text-3xl"/>
                                   <div>Kéo hoặc thả tệp ở đây, hoặc nhấn để chọn tệp</div>
                                </div>
                            )}
                        </div>
                        <div className={styles.images}>
                            {selectedImages.length > 0 &&
                                selectedImages.map((image, index) => (
                                    <Image
                                        src={`${URL.createObjectURL(image)}`}
                                        key={index}
                                        alt=""
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="">
                    <button
                        className="mt-4 mb-2.5 hover:font-bold"
                        onClick={handleNavivateToUnplash}
                    >
                        Tùy chọn thư viện hình ảnh
                    </button>
                    <p className="">
                        Donec luctus metus nec enim imperdiet, in dignissim
                        risus fringilla. Fusce bibendum vulputate scelerisque.
                        Donec in nunc quam. Suspendisse at lorem eleifend
                    </p>
                </div>

                {/* <div className="field-wrapper flex flex-col mt-5">
                    <label className="field-label mb-[16px]" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className={classNames(
                            `field-input !h-[150px] !py-[15px] !overflow-y-auto border-[0.5px]`,
                            { "field-input--error": errors.description },
                        )}
                        id="description"
                        defaultValue={defaultValues.description}
                        {...register("description", { required: true })}
                    />
                </div> */}
            </div>
        </div>
    );
}

export default SecondaryGroupColumn;
