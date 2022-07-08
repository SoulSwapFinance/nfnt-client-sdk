# nfnt-client-sdk

Client SDK for interacting with the Enjoyooor Router API

Check out the [client sdk sandbox](https://github.com/reservoirprotocol/sandbox) and the [docs](https://docs.reservoir.tools) to learn more.

## Getting Started

### Installing the SDK

```
yarn add nfnt-client-sdk
```

or

```
npm install nfnt-client-sdk --save
```

### Configuring the SDK

```
ReservoirSDK.init({
  apiBase: "https://api.enjoyooor.com"
});
```

Add the following code to your app's entry file (App.tsx/App.js or equivalent). The code above initializes and configures the Enjoyooor SDK with some base parameters. Pass in any additional options that are applicable, the only required one is the `apiBase`.

Now you're all set, to interact with the ReservoirSDK instance you need to call the follow function:

```
ReservoirSDK.client()
```

Then you can access actions or utils accordingly:

```
ReservoirSDK.client().actions.buyToken(...)
```

Head over to our [docs](https://docs.reservoir.tools) to learn more.

## Updating Types

To get the latest types for the Enjoyooor API, navigate to `/src/types` and run the following command:

```bs
npx openapi-typescript https://api.enjoyooor.com/swagger.json --output api.ts
```
