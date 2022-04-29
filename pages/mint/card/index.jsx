import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import Web3 from "web3";
import { contractABI, contractAddress } from "../../../contract";

const web3 = new Web3(Web3.givenProvider);

function Card() {
  const { isAuthenticated, logout, user } = useMoralis();
  const router = useRouter();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (!isAuthenticated) router.push("/");
  }, [isAuthenticated]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // save image to IPFS
      const file1 = new Moralis.File(file.name, file);
      await file1.saveIPFS();
      const file1url = file1.ipfs();

      // generate metadata and save to ipfs
      const metadata = {
        name,
        description,
        image: file1url,
      };
      const file2 = new Moralis.File(`${name}metadata.json`, {
        base64: Buffer.from(JSON.stringify(metadata)).toString("base64"),
      });
      await file2.saveIPFS();
      const metadataurl = file2.ipfs();
      console.log(metadataurl);
      // interact with smart contract
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      const response = await contract.methods
        .mint(metadataurl)
        .send({ from: user.get("ethAddress") });
      const tokenId = response.events.Transfer.returnValues.tokenId;

      alert(
        `NFT successfully minted. Contract address - ${contractAddress} and Token ID - ${tokenId}`
      );
    } catch (err) {
      console.error(err);
      alert("NFTC!");
      `NFT successfully minted. Contract address `
    }
  };

  return (
    <>
      <section>
        <div className="container">
          <form onSubmit={onSubmit}>
            <div className="card d-flex justify-content-evenly align-items-center">
              <div className="row">
                <div className="col">
                  <label className="btnimg">
                    <div className="imgrow" alt="up" />
                    <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                  </label>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="fs-6 c">No image selected</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input
                    type="text"
                    minlength="0"
                    maxlength="40"
                    aria-label="Last name"
                    className="form-control inputTitle"
                    placeholder="Title"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea type="text"
                    minlength="0"
                    maxlength="100000"
                    aria-label="Last name"
                    className="form-control inputDescription"
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}>
                  </textarea>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <button className="btn mint d-flex justify-content-around" type="submit">
                    <p>Mint!</p>
                  </button>
                  <button className="btn mint d-flex justify-content-around" onClick={logout} >Logout </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

export default Card;