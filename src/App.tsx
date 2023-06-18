import { useState } from 'react';
import { useOnlyFileUploadFile } from '../contract/generated';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Web3Storage } from 'web3.storage'
import './UploadFileForm.css'; 

const getAccessToken = () => {
  return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxMjEzQmRCOTg2M0MwZDgyZGFBMzM2MjlDZjNENTg1NTA4RjQ1NDEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODU4MjYxOTIxODksIm5hbWUiOiJwcm9qZWN0In0.ackTlCMEFtHo4LR911-ASbdOa4mOiJAfElQVgQVJq2U'
};

const client = new Web3Storage({ token: getAccessToken() });

function UploadFileForm() {
  const [file, setFile] = useState(null);
  const [price, setPrice] = useState('');
  const [rootCid, setRootCid] = useState(null);
  const contractAddress = '0x57E364d2F200caCBA340CBe159A1E6C95A1d4E48';
  const { isLoading, isSuccess, write} = useOnlyFileUploadFile({ address: contractAddress });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const cid = await client.put([file]);
    setRootCid(cid);
    write({ args: [cid, Number(price)] });
  };

  return (
    <div className="upload-file-form">
      <ConnectButton />
      <h1>Upload Private File</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="file">chose a file</label>
          <input id='file' type="file" onChange={handleFileChange} required />
        </div>
        <div>
          <input placeholder='price in FIL' type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className='submit-box'>
          <button id='sub-bouton' type="submit" disabled={isLoading || !file}>
            Upload
          </button>
          {isSuccess && <div>File uploaded successfully! Check the file <a href={`https://${rootCid}.ipfs.dweb.link`} target="_blank" rel="noreferrer">here</a></div>}
          {isLoading && <div>Uploading file...</div>}
        </div>
      </form>
    </div>
  );
}

export default UploadFileForm;
