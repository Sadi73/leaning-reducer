import React, { useContext, useState } from 'react';
import { DataContext } from '../App';

const AddTaskModal = ({ onClose }) => {

    const { setAllProjects } = useContext(DataContext);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        date: '',
        category: 'To-Do'
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setAllProjects(prevProjects => ({
            ...prevProjects,
            [formData.category]: [
                ...prevProjects[formData.category],
                { ...formData, id: crypto.randomUUID() }
            ]
        }));
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 w-full">
            <div className="w-full max-w-md rounded-lg bg-gray-800 shadow-xl">
                <div className="p-6">
                    <h2 className="mb-6 text-2xl font-bold text-green-400">Create Task</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label
                                htmlFor="taskName"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Task Name</label>
                            <input
                                type="text"
                                id="taskName"
                                name="title"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => handleChange(e)}
                                value={formData?.title}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="description"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Description</label>
                            <textarea
                                id="description"
                                name="description"
                                rows="3"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white placeholder-gray-400 shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => handleChange(e)}
                                value={formData?.description}
                            ></textarea>
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="dueDate"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Due Date</label>
                            <input
                                type="date"
                                id="dueDate"
                                name="date"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => handleChange(e)}
                                value={formData?.date}
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                htmlFor="category"
                                className="mb-1 block text-sm font-medium text-gray-300"
                            >Category</label>
                            <select
                                id="category"
                                name="category"
                                required
                                className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-white shadow-sm focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                                onChange={(e) => handleChange(e)}
                                value={formData?.category}
                            >
                                <option value="To-Do">To-Do</option>
                                <option value="On Progress">On Progress</option>
                                <option value="Done">Done</option>
                                <option value="Revised">Revised</option>
                            </select>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                className="rounded-md border border-gray-600 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                            >
                                Create Task
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTaskModal;