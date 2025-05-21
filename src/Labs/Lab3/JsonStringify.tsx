// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function JsonStringify() {
    const squares = [1, 4, 16, 25, 36 ];
    return (
        <div id="wd-json-stringify">
            <h3>JSON Stringify</h3>
            squares = {JSON.stringify(squares)}
            <hr />
        </div>
    )
}