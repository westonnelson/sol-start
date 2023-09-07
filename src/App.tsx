import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import "./styles/Home.css";
// Default styles that can be overridden by your app
require("@solana/wallet-adapter-react-ui/styles.css");

const Home = () => {
  // Here's how to get the thirdweb SDK instance
  // const sdk = useSDK();
  // Here's how to get a nft collection
  // const { data: program } = useProgram(
  //   your_nft_collection_address,
  //   "nft-collection"
  // );

  return (
    <>
      <div className="container">
        <div className="iconContainer">
          <img
            src="/thirdweb.svg"
            height={75}
            width={115}
            alt="thirdweb"
            className="icon"
          />
          <img
            width={75}
            height={75}
            src="/sol.png"
            className="icon"
            alt="sol"
          />
        </div>
        <h1 className="h1">Hello, California, from Earth</h1>
        <p className="explain">
          Explore New Frontiers in Non-fungible Technology with{" "}
          <b>
            <a
              href="https://sol.nftearth.exchange"
              target="_blank"
              rel="noopener noreferrer"
              className="lightPurple"
            >
              Solana NFTs infused with AI
            </a>
          </b>
          .
        </p>
        <div className="button-container">
          <WalletMultiButton style={{}} />
        </div>
      </div>
    </>
  );
};

export default Home;
