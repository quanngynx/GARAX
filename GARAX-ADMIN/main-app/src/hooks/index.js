app.post('/register', (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const user = {
      email,
      password: hashedPassword,
    };
    db.query('INSERT INTO account SET ?', user, (err, results) => {
      if (err) {
        res.status(500).send({ message: 'Lỗi đăng ký' });
      } else {
        res.send({ message: 'Đăng ký thành công' });
      }
    });
  });