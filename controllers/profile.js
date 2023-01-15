const handleProfileGet = (req, res, dbase) => {
    const { id } = req.params;
    let found = false;
    dbase.select('*').from('users').where({ id })
        .then(user => {
            if (user.length) {
                resp.json(user[0]);
            } else {
                res.status(400).json('Not Found')
            }
        })
        .catch(err => res.status(400).json('Error getting user'))

}

module.exports = {
    handleProfileGet: handleProfileGet
}