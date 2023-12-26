import React from 'react';
import axios from 'axios';

const BACKEND_SERVER_IP = "http://localhost:5000/";

export default class API{
    async createUrl(url){
        return await axios.post(BACKEND_SERVER_IP+"api/createUrl",{
            url
        });
    }
    async loadUrl(shortId){
        return await axios.get(BACKEND_SERVER_IP+"api/getUrl/"+shortId);
    }
    async loadClick(shortId){
        return  await axios.get(BACKEND_SERVER_IP+"api/getClick/"+shortId);
    }
}