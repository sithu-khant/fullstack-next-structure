## // models/User.ts

```ts
// models/User.ts
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);
export default User;
```


## // controllers/userController.ts

```ts
// controllers/userController.ts
import User from '../models/User';
import { Hono } from 'hono';

// Controller to create a new user
export const createUser = async (req: Hono.Request, res: Hono.Response) => {
  try {
    const { name, email } = await req.json();
    
    // Create a new user document
    const user = new User({ name, email });
    await user.save();
    
    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to create user' });
  }
};

// Controller to get a user by ID
export const getUserById = async (req: Hono.Request, res: Hono.Response) => {
  try {
    const { userId } = req.param();
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Error retrieving user' });
  }
};
```

## // routes/userRoutes.ts

```ts
// routes/userRoutes.ts
import { Hono } from 'hono';
import { createUser, getUserById } from '../controllers/userController';

const userRoutes = new Hono();

// POST /users - Create a new user
userRoutes.post('/users', createUser);

// GET /users/:userId - Get user by ID
userRoutes.get('/users/:userId', getUserById);

export default userRoutes;
```


### // src/index.ts

```ts
// src/index.ts
import { Hono } from 'hono';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import mongoose from 'mongoose';

// Create a new Hono app
const app = new Hono();

// MongoDB connection
const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/your_database');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Register routes
app.route(userRoutes);  // Register user routes
app.route(postRoutes);  // Register post routes

// Start the server and connect to MongoDB
app.start(3000);
connectDb();
```
