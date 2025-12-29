import { useState } from 'react';
import { Card, Button } from '../components';

const Notes = () => {
  const [notes] = useState([
    { id: 1, title: "Meeting Notes", content: "Discussed project timeline and deliverables...", date: "2024-01-15" },
    { id: 2, title: "Ideas", content: "New feature ideas for the application...", date: "2024-01-14" },
    { id: 3, title: "Shopping List", content: "Groceries needed for this week...", date: "2024-01-13" }
  ]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
          <Button>Add New Note</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition-shadow cursor-pointer">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{note.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{note.content}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{note.date}</span>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Edit</Button>
                  <Button variant="secondary" size="sm">Delete</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {notes.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No notes</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by creating a new note.</p>
            <div className="mt-6">
              <Button>Create your first note</Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;