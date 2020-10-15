const express = require("express")

const bodyParser = require("body-parser")
const Sequelize = require("sequelize")
var multer = require('multer')
const cors = require("cors")

const sequelize = new Sequelize('proiect_licenta', 'root1', 'p@ss', {
    dialect: 'mysql'
})


let User = sequelize.define('userdata', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }

})

let CompanyUser = sequelize.define('company', {
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwordCompany: {
        type: Sequelize.STRING
    }

})
let Department = sequelize.define('department', {
    numberDepartment: {
        type: Sequelize.INTEGER

    },
    departmentName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    passwordDepartment: {
        type: Sequelize.STRING
    }

})

let Contract = sequelize.define('contract', {
    numberContract: {
        type: Sequelize.INTEGER

    },
    contractDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    contractName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valueOfContract: {
        type: Sequelize.INTEGER
    }


})
let Annex = sequelize.define('annex', {
    
    annexText: {
        type: Sequelize.STRING(5000)
    }
})

let Addenum = sequelize.define('addenum', {
   
    addenumText: {
        type: Sequelize.STRING(5000)
    }

})
let Paragraph = sequelize.define('paragraph', {
    paragraphName: {
        type: Sequelize.STRING
    },
    paragraphText: {
        type: Sequelize.STRING(5000),
        allowNull: false
    }
})
let Client = sequelize.define('client', {
    clientName: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientCountry:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientZIP:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientCIF: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientCNP:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientCI:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientEmail:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientNumber: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientLocation: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientStreetName: {
        type: Sequelize.STRING,
        defaultValue: "-"

    },
    clientStreetNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    clientSector: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientIBAN: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientBank: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientRepresentative: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    clientRepresentativeFunction: {
        type: Sequelize.STRING,
        defaultValue: "-"
    }

})
let Provider = sequelize.define('provider', {
    providerName: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerCIF: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerCountry:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerZIP:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
     providerEmail:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerCI:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerCNP:{
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerNumber: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerLocation: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerStreetName: {
        type: Sequelize.STRING,
        defaultValue: "-"

    },
    providerStreetNumber: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    },
    providerSector: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerIBAN: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerBank: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerRepresentative: {
        type: Sequelize.STRING,
        defaultValue: "-"
    },
    providerRepresentativeFunction: {
        type: Sequelize.STRING,
        defaultValue: "-"
    }
})

User.hasMany(Contract)
CompanyUser.hasMany(Department)
Department.hasMany(Contract)
Contract.hasMany(Paragraph)
Contract.hasOne(Client)
Contract.hasOne(Provider)
Contract.hasMany(Annex)
Contract.hasMany(Addenum)


var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, "pics_company")
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + '-' +file.originalname )
    }
})
var upload = multer({ storage: storage }).single('file')


const app = express()
app.use(cors())
app.use(bodyParser.json())

app.post('/upload',function(req, res) {
     
    upload(req, res, function (err) {
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});
app.post('/sync', async(req, res, next) => {
    try {
        await sequelize.sync({ force: true })
        res.status(201).json({ message: 'created' })


    }
    catch (err) {
        next(err)


    }


})

app.get('/userdata', async(req, res, next) => {
    try {
        let users = await User.findAll()
        res.status(200).json(users)


    }
    catch (err) {
        next(err)


    }

})
app.post('/userdata', async(req, res, next) => {
    try {
        await User.create(req.body)
        res.status(201).json({ message: 'created' })


    }
    catch (err) {

        next(err)

    }
})

app.get('/userdata/:id', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id)
        if (user) {
            res.status(200).json(user)
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:id', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id)
        if (user) {
            await user.update(req.body)
            res.status(200).json({ message: 'accepted' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }

})

app.delete('/userdata/:id', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.id)
        if (user) {
            await user.destroy()
            res.status(200).json({ message: 'accepted' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }
})

app.get('/userdata/:bid/contracts', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid, {
            include: [Contract]
        })
        if (user) {
            res.status(200).json(user.contracts)

        }
        else {
            res.status(404).json({ message: 'not found' })
        }


    }
    catch (err) {
        next(err)
    }




})
app.post('/userdata/:bid/contracts', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contract = req.body
            contract.userdatumId = user.id
            let contracts = await user.getContracts({
                where: {
                    userdatumId: req.params.bid
                }

            })
            let previousContract = contracts.pop()
            if (contract.numberContract)
                contract.numberContract = contract.numberContract
            else {
                if (previousContract)
                    contract.numberContract = previousContract.numberContract + 1
                else contract.numberContract = 1
            }
            await Contract.create(contract)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})


app.get('/userdata/:bid/contracts/:did', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                res.status(200).json(contract)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.get('/userdata/:bid/contracts/:did/paragraphs', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let paragraphs = await contract.getParagraphs()

                res.status(200).json(paragraphs)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/userdata/:bid/contracts/:did/paragraphs', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            let paragraph = req.body
            paragraph.contractId = contract.id

            await Paragraph.create(paragraph)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:bid/contracts/:did/paragraphs/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let paragraphs = await contract.getParagraphs({
                    where: {
                        id: req.params.cid
                    }

                })
                let paragraph = paragraphs.shift()
                if (paragraph) {
                    await paragraph.update(req.body, {
                        fields: ['paragraphName', 'paragraphText']
                    })
                    res.status(202).json({ message: 'accepted' })
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})
app.delete('/userdata/:bid/contracts/:did/paragraphs/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let paragraphs = await contract.getParagraphs({
                    where: {
                        id: req.params.cid
                    }

                })
                let paragraph = paragraphs.shift()
        if (paragraph) {
            await paragraph.destroy()
            res.status(200).json({ message: 'accepted' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
            
        }
        
    }
    catch (err) {
        next(err)
    }
})

app.get('/userdata/:bid/contracts/:did/client', async(req, res, next) => {

     try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let client = await contract.getClient()

                res.status(200).json(client)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/userdata/:bid/contracts/:did/client', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            let client = req.body
            client.contractId = contract.id

            await Client.create(client)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:bid/contracts/:did/client/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let client = await contract.getClient({
                    where: {
                        id: req.params.cid
                    }

                })
                
                if (client) {
                    await client.update(req.body)
                    res.status(202).json({ message: 'accepted' })
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})


app.get('/userdata/:bid/contracts/:did/provider', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let client = await contract.getProvider()

                res.status(200).json(client)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/userdata/:bid/contracts/:did/provider', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            let provider = req.body
            provider.contractId = contract.id

            await Provider.create(provider)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:bid/contracts/:did/provider/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let provider = await contract.getProvider({
                    where: {
                        id: req.params.cid
                    }

                })
                
                if (provider) {
                    await provider.update(req.body)
                    res.status(202).json({ message: 'accepted' })
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})

app.get('/userdata/:bid/contracts/:did/annexes', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let annexes = await contract.getAnnexes()

                res.status(200).json(annexes)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})


app.post('/userdata/:bid/contracts/:did/annexes', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            let annex = req.body
            annex.contractId = contract.id

            await Annex.create(annex)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:bid/contracts/:did/annexes/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let annexes = await contract.getAnnexes({
                    where: {
                        id: req.params.cid
                    }

                })
                let annex = annexes.shift()
                if (annex) {
                    await annex.update(req.body, {
                        fields: ['annexNumber', 'annexText']
                    })
                    res.status(202).json({ message: 'accepted' })
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})


app.get('/userdata/:bid/contracts/:did/addenums', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let addenums = await contract.getAddenums()

                res.status(200).json(addenums)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/userdata/:bid/contracts/:did/addenums', async(req, res, next) => {

    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            let addenum = req.body
            addenum.contractId = contract.id

            await Addenum.create(addenum)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.put('/userdata/:bid/contracts/:did/addenums/:cid', async(req, res, next) => {
    try {
        let user = await User.findByPk(req.params.bid)
        if (user) {
            let contracts = await user.getContracts({
                where: {
                    numberContract: req.params.did
                }

            })
            let contract = contracts.shift()
            if (contract) {
                let addenums = await contract.getAddenums({
                    where: {
                        id: req.params.cid
                    }

                })
                let addenum = addenums.shift()
                if (addenum) {
                    await addenum.update(req.body, {
                        fields: ['addenumNumber', 'addenumText']
                    })
                    res.status(202).json({ message: 'accepted' })
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})





app.get('/company', async(req, res, next) => {
    try {
        let companyUsers = await CompanyUser.findAll()
        res.status(200).json(companyUsers)


    }
    catch (err) {
        next(err)


    }

})

app.post('/company', async(req, res, next) => {
    try {
        await CompanyUser.create(req.body)
        res.status(201).json({ message: 'created' })


    }
    catch (err) {

        next(err)

    }
})

app.get('/company/:id', async(req, res, next) => {
    try {
        let company = await CompanyUser.findByPk(req.params.id)
        if (company) {
            res.status(200).json(company)
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }
})
app.put('/company/:id', async(req, res, next) => {
    try {
        let company = await CompanyUser.findByPk(req.params.id)
        if (company) {
            await company.update(req.body)
            res.status(200).json({ message: 'accepted' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }

})

app.delete('/company/:id', async(req, res, next) => {
    try {
        let company = await CompanyUser.findByPk(req.params.id)
        if (company) {
            await company.destroy()
            res.status(200).json({ message: 'accepted' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }

    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments', async(req, res, next) => {
    try {
        let company = await CompanyUser.findByPk(req.params.bid, {
            include: [Department]
        })
        if (company) {
            res.status(200).json(company.departments)

        }
        else {
            res.status(404).json({ message: 'not found' })
        }


    }
    catch (err) {
        next(err)
    }




})


app.post('/company/:bid/departments', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let department = req.body
            department.companyId = company.id
            let departaments = await company.getDepartments({
                where: {
                    companyId: req.params.bid
                }

            })
            let previousDepartment = departaments.pop()
            if (department.numberDepartment)
                department.numberDepartment = department.numberDepartment
            else {
                if (previousDepartment)
                    department.numberDepartment = previousDepartment.numberDepartment + 1
                else department.numberDepartment = 1
            }
            await Department.create(department)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments/:did', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {
                res.status(200).json(department)
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.put('/company/:bid/departments/:did', async(req, res, next) => {
    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departaments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let departament = departaments.shift()
            if (departament) {
                await departament.update(req.body, {
                    fields: ['departmentName', 'password']
                })
                res.status(202).json({ message: 'accepted' })
            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }

})


app.get('/company/:bid/departments/:did/contracts', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departaments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let departament = departaments.shift()
            if (departament) {

                let contracts = await departament.getContracts()
                res.status(200).json(contracts)


            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/company/:bid/departments/:did/contracts', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            let contract = req.body
            contract.departmentId = department.id
            let contracts = await department.getContracts({
                where: {
                    departmentId: req.params.did
                }

            })
            let previousContract = contracts.pop()
            if (contract.numberContract)
                contract.numberContract = contract.numberContract
            else {
                if (previousContract)
                    contract.numberContract = previousContract.numberContract + 1
                else contract.numberContract = 1
            }
            await Contract.create(contract)
            res.status(201).json({ message: 'created' })
        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})



app.get('/company/:bid/departments/:did/contracts/:cid', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departaments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let departament = departaments.shift()
            if (departament) {

                let contracts = await departament.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                res.status(200).json(contract)


            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments/:did/contracts/:cid/paragraphs', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let paragraphs = await contract.getParagraphs()
                    res.status(200).json(paragraphs)
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})


app.post('/company/:bid/departments/:did/contracts/:cid/paragraphs', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let paragraph = req.body
                    paragraph.contractId = contract.id

                    await Paragraph.create(paragraph)
                    res.status(201).json({ message: 'created' })
                }

            }

        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})
app.get('/company/:bid/departments/:did/contracts/:cid/client', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let client = await contract.getClient()
                    res.status(200).json(client)
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})


app.post('/company/:bid/departments/:did/contracts/:cid/client', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let client = req.body
                    client.contractId = contract.id

                    await Client.create(client)
                    res.status(201).json({ message: 'created' })
                }

            }

        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments/:did/contracts/:cid/provider', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let provider = await contract.getProvider()
                    res.status(200).json(provider)
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})


app.post('/company/:bid/departments/:did/contracts/:cid/provider', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let provider = req.body
                    provider.contractId = contract.id

                    await Provider.create(provider)
                    res.status(201).json({ message: 'created' })
                }

            }

        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments/:did/contracts/:cid/annexes', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let annexes = await contract.getAnnexes()
                    res.status(200).json(annexes)
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/company/:bid/departments/:did/contracts/:cid/annexes', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let annex = req.body
                    annex.contractId = contract.id

                    await Annex.create(annex)
                    res.status(201).json({ message: 'created' })
                }

            }

        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})

app.get('/company/:bid/departments/:did/contracts/:cid/addenums', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let addenums = await contract.getAddenums()
                    res.status(200).json(addenums)
                }

            }
            else {
                res.status(404).json({ message: 'not found' })
            }
        }
        else {
            res.status(404).json({ message: 'not found' })

        }

    }
    catch (err) {
        next(err)
    }
})

app.post('/company/:bid/departments/:did/contracts/:cid/addenums', async(req, res, next) => {

    try {
        let company = await CompanyUser.findByPk(req.params.bid)
        if (company) {
            let departments = await company.getDepartments({
                where: {
                    id: req.params.did
                }

            })
            let department = departments.shift()
            if (department) {

                let contracts = await department.getContracts({
                    where: {
                        numberContract: req.params.cid
                    }

                })
                let contract = contracts.shift()
                if (contract) {
                    let annex = req.body
                    annex.contractId = contract.id

                    await Annex.create(annex)
                    res.status(201).json({ message: 'created' })
                }

            }

        }
        else {
            res.status(404).json({ message: 'not found' })
        }
    }
    catch (err) {
        next(err)
    }
})





app.listen(8080)
