import * as elements from "typed-html";
import { Layout } from "../components/Layout";

export function Home(app) {
  app.get("/", (c) => {
    return c.html(<Layout><h1>Works!</h1></Layout>);
  });
}
