# hpe-server
[![Netlify Status](https://api.netlify.com/api/v1/badges/9b150011-1acd-47e3-8a8d-b6d4ea3e51bd/deploy-status)](https://app.netlify.com/sites/affectionate-leakey-6b1858/deploys)

Live Site - https://affectionate-leakey-6b1858.netlify.com

Bootstrapped with [Create React App](https://create-react-app.dev/)

## Getting Started
```
git clone https://github.com/hpe-design/hpe-server.git
yarn install
```

Run in development mode:
```
yarn start
```

Running in production mode:
```
yarn build
```

## Netlify Config
Access site settings at https://app.netlify.com/sites/affectionate-leakey-6b1858/settings/general

### Build settings
Set the following under "Build Settings":
- Build command: `npm run build`
- Publish directory: `build`

### Deploy contexts
Production currently set at 'Master'
- Deploy previews: TBD
- Branch deploys: TBD

