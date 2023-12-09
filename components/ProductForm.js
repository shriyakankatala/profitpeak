import React, { useState, useEffect } from 'react';
import { useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

/*

req.query = {
  url: [image_url],
  prod_cost: 
  margin:
  hours:
}

*/


function  ProductForm() {
    // make an api request to /api/gpt4 with image_url
const res = fetch('/api/gpt4', {
    // method: 'GET',
    //body: JSON.stringify({

    //})
})

  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null); // new state for the image preview URL
  const fileInputRef = useRef(null);
  console.log("hello")


  const handleDragIn = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOut = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  }, []);

  // const handleDrop = useCallback((e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   setDragging(false);
  //   if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
  //     setFile(e.dataTransfer.files[0]);
  //     e.dataTransfer.clearData();
  //   }
  // }, []);

  const handleFileChange = (e) => {
    e.preventDefault();
    // const file = e.target.files[0];
    let targetFile = e.target.files[0];
    console.log("chhanging file")

    const reader = new FileReader();
    setFile(targetFile);

    reader.onload = (event) => {
      setImagePreviewUrl(event.target.result);
      console.log("before")
    };
    console.log("after")
    reader.readAsDataURL(targetFile);
    setFile(reader.result);
    // previewFile(file);
  };

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const files = e.dataTransfer.files;
    if (files && files.length > 0) {
      const file = files[0];
      setFile(file);
      previewFile(file);
      e.dataTransfer.clearData();
    }
  }, []);

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
      setImagePreviewUrl(evt.target.result);
    };
    reader.readAsDataURL(file);
  };

  const openFileDialog = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const style = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px',
      border: '2px dashed #ccc',
      borderRadius: '20px',
      backgroundColor: '#fafafa',
      color: '#bdbdbd',
      fontSize: '18px',
      width: '600px', // Adjust the width as necessary
      height: '200px', // Adjust the height as necessary
      margin: 'auto', // Center the div in the container
      cursor: 'pointer',
    },
    icon: {
      marginBottom: '10px',
      fontSize: '24px', // Adjust icon size as necessary
    }
  };

    //const data =  res.json()

    //const answer = data.answer;

    const [inputValue, setInputValue] = useState('');

    // Function to update the state with the input value
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div className="m-2">            
                <div className="container mt-3">
                    <div
                        style={style.container}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                        onDragEnter={handleDragIn}
                        onDragLeave={handleDragOut}
                        onClick={openFileDialog}
                    >
                    {imagePreviewUrl ? (
                        <img src={imagePreviewUrl} alt="Preview" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                    ) : (
                        <FontAwesomeIcon icon={faCloudUploadAlt} style={style.icon} />
                    )}
                    <p>{file ? `File selected: ${file.name}` : 'Choose or drag and drop a picture of your product here!'}</p>
                    <input
                        type="file"
                        accept="image/*" // Accept only image files
                        style={{ display: "none" }}
                        onChange={handleFileChange}
                        ref={fileInputRef}
                    />
                    </div>
                </div>

        <div className="d-flex justify-content-center col">
                <div className="form-group row">
                    <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">Hours</label>
                    <div className="col-sm-10">
                        <input 
                            // type="number"
                            className="form-control" 
                            id="colFormLabel" 
                            placeholder="Enter hours"
                            value={inputValue} 
                            onChange={handleInputChange}
                        />
                    </div>
                </div>

                <div>
                    <div className="form-group row">
                        <label htmlFor="colFormLabel" className="col-sm-2 col-form-label">$</label>
                        <div className="col-sm-10">
                            <input
                                // type="number"
                                className="form-control" 
                                id="colFormLabel" 
                                placeholder="Enter Cost"
                                value={inputValue} 
                                onChange={handleInputChange}
                            />
                        </div>
                    </div>
                </div>
            
                </div>
            
        </div>


        
    );
}


export default ProductForm;

