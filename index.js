import express from 'express';
import cartRoutes from './cart/cart.controller.js';
import connectDB from './database-connection/db.connect.js';
import productRoutes from './product/product.controller.js';
import userRoutes from './user/user.controller.js';
import cors from 'cors';

const app = express();

// cross origin resource sharing
// to allow requests from frontend

app.use(
  cors({
    origin: '*', // allow requests from all domains
  })
);

// to make app understand json
app.use(express.json());

// connect database
await connectDB();

// register routes
app.use(userRoutes);
app.use(productRoutes);
app.use(cartRoutes);

// network port and server
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
