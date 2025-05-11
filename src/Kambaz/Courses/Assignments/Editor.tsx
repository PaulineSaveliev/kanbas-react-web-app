// Pauline Saveliev
// CS5610 - Summer 1 2025

export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label><br />
        <input id="wd-name" value="A1 - History" /><br /><br />
        <textarea id="wd-description" cols={30} rows={10}>
          Do questions 1-15 at the back of chapter 1, then questions 4-13 at the back of chapter 2. Write a few paragraphs about the documentary in class and then include a description about yourself. sample text etc etc etc. sample text etc etc etc. sample text etc etc etc. sample text etc etc etc.
        </textarea>
        <br /><br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} type="number" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
                <select id="wd-group">
                    <option value="ASSIGNMENT">ASSIGNMENTS</option>
                    <option value="QUIZ">QUIZ</option>
                    <option selected value="EXAM">EXAMS</option>
                    <option value="PROJECT">PROJECTS</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
                <select id="wd-display-grade-as">
                    <option value="PERCENTAGE">Percentage</option>
                    <option value="POINTS">Points</option>
                </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
                <select id="wd-submission-type">
                    <option value="ONLINE">Online</option>
                    <option value="PHYSICAL">Physical</option>
                    <option value="Presentation">Presentation</option>
                </select><br /><br />
                Online Entry Options<br />
                <input type="checkbox" name="wd-check-text-entry" id="wd-text-entry"/>
                    <label htmlFor="wd-text-entry">Text Entry</label><br/>
                <input type="checkbox" name="wd-check-website-url" id="wd-website-url"/>
                    <label htmlFor="wd-website-url">Website URL</label><br/>
                <input type="checkbox" name="wd-check-media-recordings" id="wd-media-recordings"/>
                    <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                <input type="checkbox" name="wd-check-student-annotation" id="wd-student-annotation"/>
                    <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                <input type="checkbox" name="wd-check-file-upload" id="wd-file-upload"/>
                    <label htmlFor="wd-check-file-upload">File Upload</label><br/><br/><br/>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              Assign
            </td>
            <td>
                <label htmlFor="wd-assign-to">Assign to</label><br/>
                <input id="wd-assign-to" value={'Everyone'} /><br /><br />

                <label htmlFor="wd-due-date">Due</label><br/>
                <input type="date"
                        value="2025-05-13"
                        id="wd-due-date"/><br/><br />
                
                <table>
                    <tr>
                        <td>
                        <label htmlFor="wd-available-from">Available From</label><br/>
                        <input type="date"
                                value="2025-05-06"
                                id="wd-available-from"/>
                        </td>
                        <td>
                        <label htmlFor="wd-available-until">Available Until</label><br/>
                        <input type="date"
                                value="2025-05-20"
                                id="wd-available-until"/><br/>
                        </td>
                    </tr>
                </table>

            </td>
          </tr>
        </table>
        <hr />
        <table width="100%">
  <tr>
    <td align="right">
      <button>Cancel</button>
      &nbsp;
      <button>Submit</button>
    </td>
  </tr>
</table>
      </div>
  );}
  