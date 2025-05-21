// Pauline Saveliev
// CS5610 - Summer 1 2025

let true1 = true, false1 = false

export default function IfElse() {
    return (
        <div id="ed-if-else">
            <h4>If Else</h4>
            { true1 && <p>true1</p> }
            { !false1 ? <p>!false1</p> : <p>false1</p> }<hr />
        </div>
    )
}