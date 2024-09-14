import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InputPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    schoolName: '',
    address: '',
    examDetails: '',
    studentName: '',
    teacherName: '',
    principalName: '',
    subjects: [
      { subject: '', marks: '', weightage: '' }
    ]
  });

  const handleChange = (e, index) => {
    const { name, value } = e.target;
    if (name.startsWith('subject')) {
      const newSubjects = [...formData.subjects];
      newSubjects[index][name.split('.')[1]] = value;
      setFormData({ ...formData, subjects: newSubjects });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddSubject = () => {
    setFormData({
      ...formData,
      subjects: [...formData.subjects, { subject: '', marks: '', weightage: '' }]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/marksheet', { state: { data: formData } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>School Name</label>
        <input
          type="text"
          className="form-control"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Address</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Exam Details</label>
        <input
          type="text"
          className="form-control"
          name="examDetails"
          value={formData.examDetails}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Student Name</label>
        <input
          type="text"
          className="form-control"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Teacher Name</label>
        <input
          type="text"
          className="form-control"
          name="teacherName"
          value={formData.teacherName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Principal Name</label>
        <input
          type="text"
          className="form-control"
          name="principalName"
          value={formData.principalName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label>Subjects</label>
        {formData.subjects.map((subject, index) => (
          <div key={index} className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Subject"
              name={`subject.${index}`}
              value={subject.subject}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <input
              type="number"
              className="form-control"
              placeholder="Marks"
              name={`marks.${index}`}
              value={subject.marks}
              onChange={(e) => handleChange(e, index)}
              required
            />
            <input
              type="number"
              className="form-control"
              placeholder="Weightage"
              name={`weightage.${index}`}
              value={subject.weightage}
              onChange={(e) => handleChange(e, index)}
              required
            />
          </div>
        ))}
        <button type="button" className="btn btn-secondary" onClick={handleAddSubject}>
          Add Subject
        </button>
      </div>
      <button type="submit" className="btn btn-primary">Generate Marksheet</button>
    </form>
  );
};

export default InputPage;
