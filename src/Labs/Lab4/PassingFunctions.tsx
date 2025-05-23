// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function PassingFunctions(
    {theFunction}: {theFunction: () => void}) {
        return (
            <div>
                <h2>Passing Functions</h2>
                <button onClick={theFunction} className="btn btn-primary">
                    Invoke the Function
                </button>
                <hr />
            </div>
        )
    }