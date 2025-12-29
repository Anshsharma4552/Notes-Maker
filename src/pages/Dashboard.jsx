import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Layout from '../components/Layout';

const Dashboard = () => {
  const [notes, setNotes] = useState([
    { 
      id: 1, 
      title: "Project Planning", 
      content: "Outline the key milestones and deliverables for the upcoming project. Need to coordinate with the design team and set up initial meetings.", 
      date: "2024-01-15",
      category: "Work",
      color: "bg-blue-500"
    },
    { 
      id: 2, 
      title: "Learning Goals", 
      content: "Focus on improving React skills, particularly hooks and context API. Also want to learn more about TypeScript integration.", 
      date: "2024-01-14",
      category: "Personal",
      color: "bg-green-500"
    },
    { 
      id: 3, 
      title: "Weekend Plans", 
      content: "Visit the farmer's market, try that new restaurant downtown, and finish reading the current book.", 
      date: "2024-01-13",
      category: "Personal",
      color: "bg-pink-500"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Work', 'Personal', 'Ideas'];

  const filteredNotes = notes.filter(note => {
    const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         note.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || note.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Notes</h1>
          <p className="text-gray-600">Organize your thoughts and ideas</p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <div className="flex gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <Button>+ New Note</Button>
        </div>

        {filteredNotes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <div className={`w-full h-1 ${note.color} rounded-t-lg mb-4`}></div>
                
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {note.title}
                  </h3>
                  <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                    {note.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {note.content}
                </p>
                
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{note.date}</span>
                  <div className="flex space-x-2">
                    <button className="hover:text-blue-600">Edit</button>
                    <button className="hover:text-red-600">Delete</button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-500 mb-4">
              {searchTerm || selectedCategory !== 'All' 
                ? 'Try adjusting your search or filter criteria.'
                : 'Get started by creating your first note.'
              }
            </p>
            <Button>Create your first note</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Dashboard;