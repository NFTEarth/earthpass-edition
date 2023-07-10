# Customizable Edition Drop Minting Page

In this template, we build a page where users can claim NFTs from the [Edition Drop](https://portal.thirdweb.com/pre-built-contracts/edition-drop) contract.

## Tools

- [**Edition Drop**](https://portal.thirdweb.com/pre-built-contracts/edition-drop): Create a collection of ERC-1155 NFTs and release them to users under [claim conditions](https://portal.thirdweb.com/pre-built-contracts/edition-drop#minting--claiming-nfts).
- [**React SDK**](https://docs.thirdweb.com/react): to enable users to connect their wallets with the [useMetamask](https://portal.thirdweb.com/react/react.usemetamask) hook, and access hooks such as [useNFTDrop](https://portal.thirdweb.com/react/react.usenftdrop) to interact with the NFT drop contract.
- [**TypeScript SDK**](https://docs.thirdweb.com/typescript): to view the claimed supply, total supply, and mint NFTs from the drop.

## Using This Repo

To create your own version of this template, you can use the following steps:

Run this command from the terminal to clone this project:

```bash
npx thirdweb create --template edition-drop
```

### 1. Deploy Your Own Edition Drop on thirdweb

Head to the [dashboard](https://thirdweb.com/dashboard) and create your own **Edition Drop** contract.

You can learn how to do that with our guide [Release an NFT drop on your own site without writing any code](https://portal.thirdweb.com/guides/release-an-nft-drop-with-no-code#create-a-drop-contract).

Be sure to configure a **name**, **description**, and **image** for your NFT drop in the dashboard.

### 2. Configure the styles to your branding

You can fully customize the colors and style of this template by editing the values in the [`globals.css`](/styles/globals.css) file.

You can configure:

- The color of the background with `--background-color`
- The color of the text with `--text-color`
- The color of the button (is a gradient from primary to secondary color) with `--color-primary` and `--color-secondary`
- The font with `--font`
- The border colors with `--border-color`

### 3. Plug in your Edition Drop contract address

Replace the value of the `myEditionDropContractAddress` inside [`yourDetails.ts`](/const/yourDetails.ts) with your Edition Drop contract address you can find in the dashboard.

Replace the value of the `tokenId` inside [`yourDetails.ts`](/const/yourDetails.ts) with your tokenId.


### 4. Configure Your Network

Inside [`_app.tsx`](/pages/_app.tsx) you can configure the network you want to use:

```jsx
// This is the chain your dApp will work on.
const activeChain = "mumbai";
```

## Join our Discord!

For any questions, suggestions, join our Discord at [https://discord.gg/thirdweb](https://discord.gg/thirdweb).
