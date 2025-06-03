// Pauline Saveliev
// CS5610 - Summer 1 2025

import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./AsnGreenCheck";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons({assgnId, deleteAssgn}: {assgnId: string; deleteAssgn: (assgnId: string) => void}) {
  return (
    <div className="float-end">
      <FaTrash className="text-danger me-2 mb-1" onClick={(event) => {event.preventDefault(); deleteAssgn(assgnId)}} />
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div> );}