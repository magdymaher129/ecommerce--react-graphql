import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        
        exposes: {
            './Helper': './src/Helper.jsx'
        },
        shared: ['react',"react-dom","react-router-dom",
        "@apollo/client",
         "graphql","@dropzone-ui/react","@emotion/react",
         "@emotion/styled",
         "@reduxjs/toolkit",
         "apollo-upload-client","bootstrap",
         "react-bootstrap", "react-dropdown-select",
         "react-icons","react-redux","react-select", "recharts"]
    }),{'react-singleton-context': { singleton: true, eager: true }}
],
build:{
  modulePreLoad:false,
  target:"esnext",
  minify:false,
  cssCodeSplit:false,
},

})
