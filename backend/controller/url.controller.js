import Urls from '../models/url.model.js';
import validator from 'validator';
import ShortUniqueId from 'short-unique-id';


// Function to generate a short ID
function makeShortId(url) {
    const uid = new ShortUniqueId({ length: 7 });
    return uid.rnd();
}

// Controller function to create a new URL
export const createUrl = async (req, res, next) => {
  const longUrl = req.body.url;

  // Validate the URL
  if (!longUrl || !validator.isURL(longUrl)) {
    return res.status(400).json({ success: false, error: 'Invalid URL' });
  }

  // Generate short URL
  const shortUrl = makeShortId(longUrl);
  const clickedCount = 0;

  try {
    // Create a new Urls document
    const url = new Urls({ longUrl, shortUrl, clickedCount });

    // Save the document to the database
    await url.save();

    // Return success response
    return res.status(201).json({ success: true, url });
  } catch (error) {
    // Return error response
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


// Controller function to retrieve the original URL
export const getUrl = async (req, res, next) => {
  const shortUrl = req.params.shortId;

  try {
    // Find the URL document based on the short URL
    const url = await Urls.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ success: false, error: 'URL not found' });
    }

    //increase and save the clickCounter
    url.clickedCount++;
    await url.save();

    // Return the long URL
    return res.status(200).json({ success: true, longUrl: url.longUrl });
  } catch (error) {
    // Return error response
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

// Controller function to retrieve the click count
export const getClick = async (req, res, next) => {
  const shortUrl = req.params.shortId;

  try {
    // Find the URL document based on the short URL
    const url = await Urls.findOne({ shortUrl });

    if (!url) {
      return res.status(404).json({ success: false, error: 'URL not found' });
    }

    // Return the click count
    return res.status(200).json({ success: true, clickCount: url.clickedCount });
  } catch (error) {
    // Return error response
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
