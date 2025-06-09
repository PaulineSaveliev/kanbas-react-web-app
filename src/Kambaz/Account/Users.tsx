// Pauline Saveliev
// CS5610 - Summer 1 2025

import { useState, useEffect } from "react";
import { useParams } from "react-router";
import PeopleTable from "../Courses/People/Table";
import * as client from "./client";
import { FormControl } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";

export default function Users() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const createUser = async () => {
        const user = await client.createUser({
            firstName: "New",
            lastName: `User${users.length + 1}`,
            username: `newuser${Date.now()}`,
            password: "password123",
            email: `email${users.length+1}@neu.edu`,
            section: "S101",
            role: "STUDENT",
        });
        setUsers([...users, user]);
    }
    const filterUsersByName = async () => {
        if (name) {
            const usersFound = await client.findUsersByPartialName(name);
            setUsers(usersFound)
            if (role) {
                const newUsers = usersFound.filter((u: any) => u.role === role);
                setUsers(newUsers);
            }
        } else {
            fetchUsers();
        }
    }
    const filterUsersByRole = async (newRole: string) => {
        setRole(newRole);
        if (newRole) {
            const usersFound = await client.findUsersByRole(newRole);
            setUsers(usersFound)
            if (name) {
                const newUsers = usersFound.filter((u: any) => 
                    u.firstName.includes(name) || u.lastName.inludes(name)
                );
                setUsers(newUsers);
            }
        } else {
            fetchUsers();
        }
    }
    const {uid} = useParams();
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };
    useEffect(() => {
        fetchUsers();
    }, [uid]);
    return (
        <div>
            <button onClick={createUser} className="float-end btn btn-danger wd-add-people">
                <FaPlus className="me-2" />
                Users
            </button>
            <h3>Users</h3>
            <FormControl onChange={(e) => setName(e.target.value)}
                placeholder="Search People"
                className="float-start w-25 me-2 wd-filter-by-name" />
            <button 
                onClick={() => {filterUsersByName()}}
                className="btn float-start btn-primary me-2">Search
            </button>
            <select value={role} onChange={(e) => filterUsersByRole(e.target.value)}
                className="form-select float-end w-25 wd-select-role">
                <option value="">All Roles</option>
                <option value="FACULTY">Faculty</option>
                <option value="TA">Assistants</option>
                <option value="STUDENT">Student</option>
                <option value="ADMIN">Administrators</option>
            </select>
            <PeopleTable users={users} />
        </div>
    );
}