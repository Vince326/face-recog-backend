const Clarifai = require('clarifai');


const handleApiCall = (res, resp) =>{
    app.models.predict(Clarifai.FACE_DETECT_MODEL,
    this.state.input)
    .then(data => {
        res.json(data);
    })
    .catch(err => res.status(400).json("Unable to use Api"));
}
//Clarifai api key
const app = new Clarifai.App({
    apiKey: 'b16559fec60a4712ac6cdb90ec52db27'
});



const handleImage = (req, res, dbase) => {
    const { id } = req.body;
    dbase('users').where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => {
            resp.json(entries[0].entries);
        })
        .catch(err => res.status(400).json('unable to get entries'))
}

module.exports = {
    handleImage: handleImage
    handleApiCall
}

