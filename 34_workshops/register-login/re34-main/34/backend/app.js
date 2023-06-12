const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

require('dotenv').config();

const corsMiddleware = require('./middleware/corsMiddleware');

app.use(express.json());
app.use(corsMiddleware);

app.post('/api/register', async (req, res) => {
  try {
    const { name, age, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        age,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

app.post('/api/login', async (req, res) => {
  // Login route handler
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
