const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../models');
const { JsonWebTokenError } = require('jsonwebtoken');
const router = express.Router();

router.post('/add',(req,res) => {
  db.membre_model.create(req.body).then((response) => {
    res.status(201).send(response)}).catch((err) => {
    res.status(400).send(err)
  })
});

router.put('/update/:id',(req,res) => {
  db.membre_model.update(req.body,{where:{id_membre:req.params.id}}).then((response) => {
    res.status(200).send(response)}).catch((err) => {
    res.status(400).send(err)
  }) 
});

router.delete('/remove/:id',(req,res) => {
  db.membre_model.destroy({where:{id_membre:req.params.id}}).then((response) => {
    res.send("removed")}).catch((err) => {
    res.status(400).send(err)
  })
});

router.get('/:id',(req,res) => {
  db.membre_model.findOne({where:{id_membre: req.params.id}}).then((response) => {
    res.status(200).send(response)}).catch((err) => {
    res.status(400).send(err)
  })  
});

router.get('/all',(req, res) => {
  db.membre_model.findAll().then((response) => {
    res.status(200).send(response)}).catch((err) => {
    res.status(400).send(err)
  })
})

router.post('/register', async (req,res) => {
  const saltRounds = 10;
  const {password} = req.body;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await db.users_model.findOne({ where: { email: req.body.email } })

  if (!user) {
    db.users_model.create({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword
    }).then((response) => {
        const {password, ...data} = response.dataValues
        res.status(201).send(data)})
      .catch((err)=>{
        res.status(400).send(err)
    })
  } else {
    res.status(400).send({
      message: 'User already exists'
    })
  }
});

router.post('/login', async (req, res) => {
  const user = await db.users_model.findOne({ where: { email: req.body.email } })

  if (!user) {
    res.status(400).send({
      message: 'User does not exists'
    })
  }

  if (!await bcrypt.compare(req.body.password, user.password)) {
    res.status(400).send({
      message: 'Invalide password'
    })
  }

  const token = jwt.sign({id: user.id}, 'secret'); // secret should be placed in .env file

  res.cookie('jwt', token, {
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  })

  res.send({
    message: 'success'
  })
});

router.get('/', async (req, res) => {
  try {
      const cookie = req.cookies['jwt'];

      const claims = jwt.verify(cookie, 'secret'); // secret should be placed in .env file

      if (!claims) {
          return res.status(401).send({
              message: 'unauthenticated'
          })
      }

      const user = await db.users_model.findOne({ where: { id: claims.id } });
      const {password, ...data} = await user.dataValues;
      res.send(data);

  } catch (e) {
      return res.status(401).send({
          message: 'unauthenticated'
      })
  }
})

router.post('/logout', (req, res) => {
  res.cookie('jwt', '', {maxAge: 0});

  res.send({
      message: 'success'
  })
});

module.exports = router;
