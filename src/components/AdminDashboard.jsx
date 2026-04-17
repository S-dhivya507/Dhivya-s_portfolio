import { useState } from 'react';

export default function AdminDashboard({ isOpen, onClose, projects = [] }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    liveLink: '',
    tags: ''
  });

  const [downloadToggled, setDownloadToggled] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // 1. Generate new ID
    const newId = projects.length > 0 ? Math.max(...projects.map(p => p.id || 0)) + 1 : 1;
    
    // 2. Parse tags
    const parsedTags = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag);

    // 3. Create the new project object
    const newProject = {
      id: newId,
      title: formData.title,
      description: formData.description,
      image: formData.image,
      liveLink: formData.liveLink,
      tags: parsedTags
    };

    // 4. Merge with existing data
    const updatedData = [...projects, newProject];

    // 5. Generate JSON string
    const jsonString = JSON.stringify(updatedData, null, 2);

    // 6. Create Blob and Download
    const blob = new Blob([jsonString], { type: "application/json" });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = "data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setDownloadToggled(true);
    
    // reset form
    setFormData({ title: '', description: '', image: '', liveLink: '', tags: '' });
  };

  return (
    <div className="admin-modal-overlay">
      <div className="admin-modal-content">
        <button className="admin-close-btn" onClick={onClose}>
          <i className="fas fa-times"></i> &times;
        </button>

        <h2 className="title-gradient" style={{ marginBottom: '20px', fontSize: '2rem' }}>Add New Project</h2>
        
        <div className="admin-instructions">
          <strong>No-Database Saves:</strong> When you hit save, this tool will download an updated <code>data.json</code> file to your browser. 
          To permanently save your project, <strong>move the downloaded file into your `src` folder</strong> and overwrite the old one!
        </div>

        <div className="admin-form-group">
          <label>Project Title *</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} placeholder="e.g. AI Resume Builder" required />
        </div>

        <div className="admin-form-group">
          <label>Description *</label>
          <textarea name="description" value={formData.description} onChange={handleChange} rows="3" placeholder="Brief description of your project..."></textarea>
        </div>

        <div className="admin-form-group">
          <label>Image URL *</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="https://images.unsplash.com/photo-..." />
        </div>

        <div className="admin-form-group">
          <label>Live Link URL</label>
          <input type="text" name="liveLink" value={formData.liveLink} onChange={handleChange} placeholder="https://my-project.vercel.app" />
        </div>

        <div className="admin-form-group">
          <label>Tags (comma separated)</label>
          <input type="text" name="tags" value={formData.tags} onChange={handleChange} placeholder="React, Node.js, AI, CSS" />
        </div>

        <div className="admin-actions">
          <button className="btn-glow secondary" onClick={onClose} style={{ padding: '10px 20px' }}>Cancel</button>
          <button className="btn-glow primary" onClick={handleSave} style={{ padding: '10px 20px' }}>
             Download & Save
          </button>
        </div>
        
        {downloadToggled && (
          <p style={{ color: 'var(--neon-cyan)', marginTop: '20px', textAlign: 'center', fontWeight: 'bold' }}>
            Success! File downloaded. Now drop it into your src/ folder.
          </p>
        )}
      </div>
    </div>
  );
}
