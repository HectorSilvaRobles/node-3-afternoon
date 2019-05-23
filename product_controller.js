module.exports = {
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        console.log(req.body)
        const {name, description, price, image_url} = req.body

        dbInstance
        .create_product([name, description, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send('sorry budster you messed up')
        })
    },

    get_one: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params

        dbInstance
            .read_product(id)
            .then(product => res.status(200).send(product))
            .catch(err => {
                res.status(500).send('Oops something went wrong buddy')
            })
    },

    get_all: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance
        .read_products()
        .then(products => res.status(200).send(products))
        .catch(err => {
            res.status(500).send('Wow you really messed up my code -_- ')
        })
    },

    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        const {desc} = req.query
        console.log(id)
        console.log(desc)

        dbInstance
        .update_product([id, desc])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send('Take my soul')
        })
    },
    
    deleteProduct: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        console.log('hit')
        console.log(id)

        dbInstance
        .delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send('sorry budster, you could not delete')
        })
    }
}