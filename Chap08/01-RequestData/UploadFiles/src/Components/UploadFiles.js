import React, {useState} from "react";

function UploadFiles(){
    const [file, setFile] = useState(null);
    const [url, setURL] = useState(null);

    const handleOnChange = (e) => {
        setFile(e.target.files[0]);
    }

    const Upload = async (e) => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try{
            const res = await fetch('http://localhost:5155/api/Users/Upload-Images', {
                method: 'POST',
                body: formData
            });

            const resData = await res.json();
            console.log(resData.thongbao);
            setURL(`http://localhost:5155${resData.url_image}`);
        }
        catch(err){
            console.error('Lỗi khi upload file:', err);
        }
    }

    return (        
        <div>
            <input type="file" onChange={handleOnChange} />
            <button onClick={Upload}>Upload files</button>
            {
                url && (
                    <div>
                        <p>Upload images:</p>
                        <img src={url} alt="Upload" style={{width: "200px"}} />
                    </div>
                )
            }
        </div>                   
    )
}

export default UploadFiles;