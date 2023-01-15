const handleSignin = (req, res, dbase, bcrypt) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json("Incorrect user sign in")
    }

    dbase.select('email', 'hash').from('login')
        .where('email', '=', email)
        .then(data => {
            const isValid = bcrypt.compareSync(password, data[0].hash);
            console.log(isValid);
            if (isValid) {
                return dbase.select('*').from(users)
                    .where('email', '=', email)
                    .them(user => {
                        console.log(user);
                        res.json(user[0])
                    })
                    .catch(err => res.status(400).json('Unable to retrieve user'))

            } else {
                res.status(400).json("Wrong Credentials")
            }

        })
        .catch(err => res.status(400).json("Wrong Credentials"))
}

module.exports = {
    handleSignin: handleSignin
}