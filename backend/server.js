import express from "express"
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import doctorRouter from "./routes/doctorRoute.js"
import adminRouter from "./routes/adminRoute.js"

// app config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/admin", adminRouter)
app.use("/api/doctor", doctorRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on PORT:${port}`))
//hello
// Update on 2024-06-06 - Commit 5
// Update on 2024-06-15 - Commit 5
// Update on 2024-06-16 - Commit 4
// Update on 2024-06-29 - Commit 1
// Update on 2024-07-04 - Commit 3
// Update on 2024-07-07 - Commit 4
// Update on 2024-07-19 - Commit 3
// Update on 2024-07-24 - Commit 1
// Update on 2024-07-27 - Commit 4
// Update on 2024-08-03 - Commit 4
// Update on 2024-08-06 - Commit 3
// Update on 2025-07-18 - Commit 2
// Update on 2025-07-28 - Commit 1
// Update on 2025-07-28 - Commit 2
// Update on 2025-07-30 - Commit 2
// Update on 2025-08-06 - Commit 2
// Update on 2025-08-12 - Commit 2
// Update on 2025-08-14 - Commit 5
// Update on 2025-08-17 - Commit 3
// Update on 2025-08-21 - Commit 2
// Update on 2025-08-21 - Commit 3
// Commit 23 - 07/18/2025 00:00:00
// Commit 42 - 07/25/2025 00:00:00
