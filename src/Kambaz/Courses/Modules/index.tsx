// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function Modules() {
    return (
      <div>
        {/* Implement Collapse All button, View Progress button, etc. */}
        <button type="button"
            id="wd-all-good">
            Collapse All
            </button>
        <button type="button"
            id="wd-all-good">
            View Progress
            </button>
        <select id="wd-select-one-genre">
            <option selected value="ALL">Publish All</option>
            <option value="SOME">Publish Some</option>
            <option value="NONE">Hide All</option>
        </select>
        <button type="button"
            id="wd-all-good">
            + Module
        </button>
        <ul id="wd-modules">
          <li className="wd-module">
            <div className="wd-title">Week 1, Intro, Lectures 1+2</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction to the course</li>
                  <li className="wd-content-item">History of Environmental Action</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Fundamentals of Environmental Science - ch.1</li>
                  <li className="wd-content-item">Fundamentals of Environmental Science - ch.2</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Introduction</li>
                  <li className="wd-content-item">Ancient ENVR Action</li>
                  <li className="wd-content-item">Recent History</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
          <div className="wd-title">Week 2, Water, Lectures 3+4</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Water Systems</li>
                  <li className="wd-content-item">Freshwater Environments</li>
                  <li className="wd-content-item">Saltwater Environments</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Fundamentals of Environmental Science - ch.3</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Water Cycle</li>
                  <li className="wd-content-item">Freshwater Systems</li>
                  <li className="wd-content-item">Saltwater Systems</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="wd-module">
          <div className="wd-title">Week 3, Environments 1, Lecture 5</div>
            <ul className="wd-lessons">
              <li className="wd-lesson">
                <span className="wd-title">LEARNING OBJECTIVES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Terrestrial Environments</li>
                </ul>
                <span className="wd-title">READING</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Fundamentals of Environmental Science - ch.4</li>
                  <li className="wd-content-item">Fundamentals of Environmental Science - ch.5</li>
                </ul>
                <span className="wd-title">SLIDES</span>
                <ul className="wd-content">
                  <li className="wd-content-item">Terrestrial Environments</li>
                  <li className="wd-content-item">Threats to Terrestrial Environments</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
  );}
  