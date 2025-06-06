// Pauline Saveliev
// CS5610 - Summer 1 2025

const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function EnvironmentVariables() {
    return (
        <div id="wd-environment-variables">
            <h3>Environment Variables</h3>
            <p>Remote Server: {REMOTE_SERVER}</p>
        </div>
    )
}