import {Application, Router} from "https://deno.land/x/oak@v11.1.0/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (context) => {
    context.response.body = "Listening for Requests...";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });