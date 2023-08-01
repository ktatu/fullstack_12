const express = require("express")
const { Todo } = require("../mongo")
const { getAsync, setAsync } = require("../redis")
const router = express.Router()

router.get("/", async (req, res) => {
    const todosCounter = await getAsync("todos_counter")

    return res.json({ added_todos: todosCounter })
})

module.exports = router
