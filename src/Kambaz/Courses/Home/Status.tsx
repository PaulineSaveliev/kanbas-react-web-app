// Pauline Saveliev
// CS5610 - Summer 1 2025


import { MdDoNotDisturbAlt } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BiImport } from "react-icons/bi";
import { LiaFileImportSolid } from "react-icons/lia";
import { Button } from "react-bootstrap";
import { TbHomePlus } from "react-icons/tb"
import { TfiAnnouncement } from "react-icons/tfi";
import { RiPagesLine } from "react-icons/ri";
import { LuChartLine } from "react-icons/lu";
import { IoNotifications } from "react-icons/io5";
{/* Find more icons */}
export default function CourseStatus() {
 return (
   <div id="wd-course-status" style={{ width: "350px" }}>
     <h2>Course Status</h2>
     <div className="d-flex">
       <div className="w-50 pe-1">
         <Button variant="secondary" size="lg" className="w-100 text-nowrap ">
           <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish </Button> </div>
       <div className="w-50">
         <Button variant="success" size="lg" className="w-100">
           <FaCheckCircle className="me-2 fs-5" /> Publish </Button> </div>
     </div>
     <br />
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <BiImport className="me-2 fs-5" /> Import Existing Content </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <LiaFileImportSolid className="me-2 fs-5" /> Import from Commons </Button>
     <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TbHomePlus className="me-2 fs-5" /> Choose Home Page </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <RiPagesLine className="me-2 fs-5" /> View Course Stream </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <TfiAnnouncement className="me-2 fs-5" /> New Announcement </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <LuChartLine className="me-2 fs-5" /> New Analytics </Button>
       <Button variant="secondary" size="lg" className="w-100 mt-1 text-start">
       <IoNotifications className="me-2 fs-5" /> View Course Notifications </Button>
   </div> );}