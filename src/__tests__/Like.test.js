import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../components/Like"

test("Default like 0", ()=>{
    render(<Like/>);
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
})


test("Likes increased when clicked Like", ()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText("Like"));
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
    
})

test("Likes decrease when clicked Dislike", ()=>{
    render(<Like/>);
    fireEvent.click(screen.getByText("Dislike"));
    expect(screen.getByText("Likes: -1")).toBeInTheDocument();
    
})