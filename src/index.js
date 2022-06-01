import express from "express"
const app = express()
const port = process.env.PORT || 3000
import { firebase } from "./firebaseConfig.js"
import { auth } from "./firebaseAuth.js"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

app.use(express.json())

app.get("/", (req, res) => res.send("Hello"))

app.post("/signup", (req, res) => {
    const {email, password} = req.body
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        res.send(user)
        // ...
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        res.send(errorMessage)
    });
})

app.get("/login", (req, res) => {
    const {email, password} = req.body

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        res.send(user)
        console.log("Verified")
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        res.send(errorMessage)
      });
})


app.listen(port, () => console.log(`listening at ${port}`))