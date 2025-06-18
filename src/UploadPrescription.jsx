import React, { useState } from 'react';
import './UploadPrescription.css';

const UploadPrescription = () => {
  const [fileName, setFileName] = useState('');
  const [fileURL, setFileURL] = useState('');
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileType = file.type;
    setFileName(file.name);
    setMessage("✅ Prescription uploaded successfully! Personalized suggestions coming soon...");

    if (fileType.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      setFileURL(url);
    } else {
      setFileURL('');
    }
  };

  return (
    <div className="upload-container">
      <div className="upload-card">
        <h2>📤 Upload Your Prescription</h2>
        <p className="upload-subtext">
          Upload a scanned prescription or medical bill. Our AI will analyze it and suggest better insurance options.
        </p>

        <label className="upload-dropzone">
          <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} />
          <div className="upload-icon">📎</div>
          <span className="upload-text">{fileName || 'Click or drag to upload your file'}</span>
        </label>

        {fileURL && (
          <div className="preview-card">
            <p className="preview-label">Preview</p>
            <img src={fileURL} alt="Preview" className="preview-image" />
          </div>
        )}

        {!fileURL && fileName.endsWith('.pdf') && (
          <div className="preview-card">
            <p className="preview-label">PDF uploaded:</p>
            <p className="preview-pdf">{fileName}</p>
          </div>
        )}

        {message && <div className="upload-message">{message}</div>}
      </div>
    </div>
  );
};

export default UploadPrescription;
