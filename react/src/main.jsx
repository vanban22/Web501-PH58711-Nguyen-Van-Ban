import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
function Profile() {
    const name = "Nguyễn Văn A";
    const studentId = "SV001";
    const major = "Công nghệ Thông tin";

    return (
        <div className="profile-card">
            <h2>Thông tin sinh viên</h2>
            <p>
                <strong>Họ tên:</strong> {name}
            </p>
            <p>
                <strong>Mã SV:</strong> {studentId}
            </p>
            <p>
                <strong>Ngành học:</strong> {major}
            </p>
        </div>
    );
}

export default Profile;