const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

app.use(cors());

app.listen(4000, () => {
    console.log("Server is working at port 4000 !!");
});

app.get('/download', async (req, res) => {
    const URL = req.query.URL;
    const info = await ytdl.getInfo(URL);
    const title = info.videoDetails.title;
    
    res.header('Content-Disposition', `attachment; filename="${title}.mp3"`);

    ytdl(URL, {
        format: 'mp3',
        filter: 'audioonly'
    }).pipe(res);
});
