import React, { useState, useCallback, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';

function DragDrop() {
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

  /*return (
    <div className="container mt-3">
      <div
        className={`p-5 border ${dragging ? 'border-primary' : 'border-secondary'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onClick={openFileDialog} // Opening the file dialog on click
        style={{ cursor: 'pointer' }} // Optional: Change cursor to indicate clickable area
      >
        <div className='flex items-center'>
          {file ? (
            <p>File selected: {file.name}</p>
          ) : (
            <p>Choose or drag and drop a picture of your product here</p>
          )}
        </div>
        <input
          type="file"
          style={{ display: "none" }}
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>
    </div>
  );
} */
console.log("File",imagePreviewUrl)
return (
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
);
}

export default DragDrop;
