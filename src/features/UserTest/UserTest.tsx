import React, { useState } from 'react';
import { useGetUsersQuery, useCreateUserMutation, useDeleteUserMutation } from "../../api/apiSlice";

// Define the type of the props for the component
interface Props { }

// Define the component
const Users: React.FC<Props> = () => {
    // Use the useGetUsersQuery hook to get the users data
    const { data, error, isLoading } = useGetUsersQuery();

    // Use the useCreateUserMutation hook to create a new user
    const [createUser, { isLoading: isCreating }] = useCreateUserMutation();

    // Use the useDeleteUserMutation hook to delete a user
    const [deleteUser, { isLoading: isDeleting }] = useDeleteUserMutation();

    // Define the state for the form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    // Define the handler for the form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Create a new user with the form inputs
        await createUser({ name, email, role });
        // Reset the form inputs
        setName('');
        setEmail('');
        setRole('');
    };

    // Define the handler for the delete button
    const handleDelete = async (id: number) => {
        // Delete the user by id
        await deleteUser(id);
    };

    console.log(data)
    // Render the users or the error
    return (
        <div>
            {error ? (
                <p>{error.error}</p>
            ) : (
                <div>
                    <h2>Create a new user</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            id="name"
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <label htmlFor="email">Email:</label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="role">Role:</label>
                        <input
                            id="role"
                            type="text"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            required
                        />
                        <button type="submit" disabled={isCreating}>
                            Create
                        </button>
                    </form>
                    <h2>List of users</h2>
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <table>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            {/* {data &&
                            <tbody>
                                {data?.map((user) => (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.role}</td>
                                        <td>
                                            <button onClick={() => handleDelete(user.id)} disabled={isDeleting}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            } */}
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default Users;
