import express from "express";
import tacheroute from "./route/TacheRoute.js";
import authroute from "./route/AuthRoute.js";
const app = express();
const Port = 3000;
app.use(express.json());
app.use("/taches", tacheroute);
app.use("/auth", authroute);
app.listen(Port, () => {
    console.log(`demare sur http://localhost:${Port}`);
});
//# sourceMappingURL=index.js.map