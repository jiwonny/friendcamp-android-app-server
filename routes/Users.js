const router = require('express').Router();
const Users = require('../models/User');

// Find All
router.get('/', (req, res) => {
  Users.findAll()
    .then((Users) => {
      if (!Users.length) return res.status(404).send({ err: 'User not found' });
      res.send(`find successfully: ${Users}`);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/Login_id/:Login_id', (req, res) => {
  Users.findOneByLoginId(req.params.Login_id)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
})
// Find One by loginid
router.get('/search/:Login_id', (req, res) => {
  console.log("7987897897897987897987987");
  Users.findUsers(req.params.Login_id)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

// Find One by Name and Number
router.get('/Name/:Name/Phone/:Phone', (req, res) => {
  Users.findOneByName_Number(req.params.Name, req.params.Phone)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/Name/:Name/Login_id/:Login_id', (req, res) => {
  Users.findOneByName_LoginId(req.params.Name, req.params.Login_id)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
});

router.get('/Login_id/:Login_id', (req, res) => {
  Users.findOneByLoginId(req.params.Login_id)
    .then((user) => {
      if (!user) return res.status(404).send({ err: 'User not found' });
      res.send(user);
    })
    .catch(err => res.status(500).send(err));
})


router.post('/', (req, res) => {
  Users.create(req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Update User by login_id
router.put('/Login_id/:Login_id', (req, res) => {
  Users.updateByLoginId(req.params.Login_id, req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Update User profile by Loigin_id
router.put('/Profile/:Login_id/:Profile', (req, res) => {
  Users.updateProfilebyLoginId(req.params.Login_id, req.params.Profile, req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
});

// Delete by todoid
router.delete('/Login_id/:Login_id', (req, res) => {
  Users.deleteByTodoid(req.params.Login_id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

router.post('/register', (req, res) => {
  Users.newUserRegister(req.body)
    .then(user => res.send(user))
    .catch(err => res.status(500).send(err));
})

module.exports = router;
