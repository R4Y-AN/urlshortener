import express from 'express';
import {createUrl,getClick,getUrl} from '../controller/url.controller.js';

const apiroutes = express.Router();

apiroutes.get("/getClick/:shortId",getClick);
apiroutes.get("/getUrl/:shortId",getUrl);

apiroutes.post("/createUrl",createUrl);

export default apiroutes;