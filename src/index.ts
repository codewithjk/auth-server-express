import { createApp } from "./createApp";

const PORT = 3000;

const app = createApp();
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})