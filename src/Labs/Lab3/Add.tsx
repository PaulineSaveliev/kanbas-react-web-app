// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function Add({ a,b }: {a: number; b: number}) {
    return (
        <div id="wd-add">
            <h4>Add</h4>
            a = {a} <br />
            b = {b} <br />
            a + b = {a + b} <hr />
        </div>
    )
}