// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function Padding() {
    return (
        <div id="wd-css-paddings">
            <h2>Padding</h2>
            <div className="wd-padded-top-left wd-border-fat 
                wd-border-red wd-border-solid 
                wd-bg-color-yellow">
                Padded top left
            </div>
            <div className="wd-padded-bottom-right wd-border-fat 
                wd-border-blue wd-border-solid 
                wd-bg-color-yellow">
                Padded bottom right
            </div>
            <div className="wd-padding-fat wd-border-fat 
                wd-border-yellow wd-border-solid 
                wd-bg-color-blue wd-fg-color-white">
                Padded all around 
            </div>
            <h2>Margins</h2>
            <div className="wd-margin-bottom wd-border-fat 
                wd-border-red wd-border-solid 
                wd-bg-color-yellow">
                Margin at bottom
            </div>
            <div className="wd-margin-both-sides wd-border-fat 
                wd-border-blue wd-border-solid 
                wd-bg-color-yellow">
                Margin both sides
            </div>
            <div className="wd-margins-fat wd-border-fat 
                wd-border-yellow wd-border-solid 
                wd-bg-color-blue wd-fg-color-white">
                Margins all around 
            </div>
        </div>

    )
}