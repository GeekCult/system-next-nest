'use client';
import { useState, ChangeEvent, useRef } from 'react';

export default function UploadImages(){

    const [currentFile, setCurrentFile] = useState<File | null>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [state, setState] = useState();
    const [progress, setProgress] = useState();
    const hiddenFileInput = useRef<any>(null);

    const handleClick = () : void => {
        if(!hiddenFileInput.current!) return 
        hiddenFileInput.current!.click();
    }

    const change = async (event: ChangeEvent<HTMLInputElement> | null) => {
        setCurrentFile(event!.target.files![0])
        setPreviewImage(URL.createObjectURL(event!.target.files![0]))
        upload(event)
    }

    const upload = async (event: ChangeEvent<HTMLInputElement> | null) => {
        const pictureData = new FormData();
        if (!event!.target.files) return;
        console.log(event!.target.files)
        pictureData.append('file', event!.target.files[0]);
        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: pictureData,
            });
            const data = await response.json();
            if (!response.ok) {
                throw data;
            }
            //setpictureFile(null);
        } catch (error: any) {
            console.log(error.message);
        }
    }


    return (
        <>               
            <input type="file" name="file" accept="image/*" className='hide' ref={hiddenFileInput} onChange={change}/>            
            <button onClick={handleClick} className='btn btn-main' type="button">
                Upload a file
            </button>  
            <img src={previewImage ? previewImage : ""} className='slot-image'/>           
        </>
    );
    
}