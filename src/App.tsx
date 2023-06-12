import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Web3Storage } from 'web3.storage'
import { useForm } from 'react-hook-form'
import { useAccount } from 'wagmi'
import './App.css'

type FormValues = {
  fileToUpload: FileList;
  price: number;
  walletAddress: string;
};

const getAccessToken = () => {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDMxMjEzQmRCOTg2M0MwZDgyZGFBMzM2MjlDZjNENTg1NTA4RjQ1NDEiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODU4MjYxOTIxODksIm5hbWUiOiJwcm9qZWN0In0.ackTlCMEFtHo4LR911-ASbdOa4mOiJAfElQVgQVJq2U";
};

const client = new Web3Storage({ token: getAccessToken() });

function App() {
  const { register, handleSubmit } = useForm<FormValues>();
  const { address, isConnecting, isDisconnected } = useAccount();

  const onSubmit = async (data: FormValues) => {
    const file = data.fileToUpload[0];
    const rootCid = await client.put([file]);
    const info = await client.status(rootCid);

    if (info != null) {
      const fileInfo = {
        cid: rootCid,
        priceInFIL: data.price,
        walletAddress: address,
      };

      console.log(fileInfo);
    }
  };

  return (
    <>
      <ConnectButton />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="fileToUpload">File to upload to Filecoin</label>
          <input type="file" {...register("fileToUpload")} />
          <label htmlFor="price">Price in FIL</label>
          <input type="number" step="0.0001" {...register("price")} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
