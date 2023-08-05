import "@testing-library/jest-dom/extend-expect"
import { render, screen } from "@testing-library/react"
import Todo from "./Todo"

test("renders content", () => {
    const todo = { text: "This is a test todo", done: false }

    const mockHandleComplete = jest.fn()
    const mockHandleDelete = jest.fn()

    render(
        <Todo
            todo={todo}
            handleComplete={mockHandleComplete}
            handleDelete={mockHandleDelete}
        />
    )

    const element = screen.getByText("This is a test todo")
    expect(element).toBeDefined()
})
