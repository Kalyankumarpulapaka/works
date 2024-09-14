import React from 'react';
import { useLocation } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import Chart.js auto-register

const Marksheet = () => {
  const location = useLocation();
  const { data } = location.state || {};

  if (!data) {
    return <div>No data available</div>;
  }

  const totalMarks = data.subjects.reduce((acc, subject) => acc + Number(subject.marks), 0);
  const totalWeightage = data.subjects.reduce((acc, subject) => acc + Number(subject.weightage), 0);
  const percentage = totalMarks / totalWeightage * 100;
  const passFailStatus = percentage >= 40 ? 'Pass' : 'Fail';

  const chartData = {
    labels: data.subjects.map((subject) => subject.subject),
    datasets: [{
      data: data.subjects.map((subject) => Number(subject.marks)),
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    }],
  };

  return (
    <div className="marksheet">
      <h1 className="text-center">Marksheet</h1>
      <div className="marksheet-header">
        <h2>{data.schoolName}</h2>
        <p>{data.address}</p>
        <p>{data.examDetails}</p>
      </div>
      <div className="marksheet-body">
        <h3>{data.studentName}</h3>
        <p>Percentage: {percentage.toFixed(2)}%</p>
        <p>Status: {passFailStatus}</p>
        <div className="chart-container">
          <Pie data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        </div>
        <table className="table table-bordered mt-4">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Marks</th>
              <th>Weightage</th>
            </tr>
          </thead>
          <tbody>
            {data.subjects.map((subject, index) => (
              <tr key={index}>
                <td>{subject.subject}</td>
                <td>{subject.marks}</td>
                <td>{subject.weightage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <footer className="marksheet-footer">
        <p>Principal: {data.principalName}</p>
        <p>Teacher: {data.teacherName}</p>
      </footer>
    </div>
  );
};

export default Marksheet;
