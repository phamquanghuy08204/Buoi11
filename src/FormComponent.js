import React, { useState } from "react";
import axios from "axios";

const FormComponent = () => {
    const [formData, setFormData] = useState({
        code: "",
        title: "",
        order: "",
        content: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/AddInfo', formData);
            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleReset = () => {
        setFormData({
            code: "",
            title: "",
            order: "",
            content: ""
        });
    };

    return (
        <div style={{ width: "400px", margin: "auto" }}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="code" style={{ marginBottom: "5px" }}>Mã tin:</label>
                    <input type="text" id="code" name="code" value={formData.code} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="title" style={{ marginBottom: "5px" }}>Tiêu đề:</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="order" style={{ marginBottom: "5px" }}>Thứ tự:</label>
                    <input type="text" id="order" name="order" value={formData.order} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px" }} />
                </div>
                <div style={{ marginBottom: "10px" }}>
                    <label htmlFor="content" style={{ marginBottom: "5px" }}>Nội dung:</label>
                    <textarea id="content" name="content" value={formData.content} onChange={handleChange} style={{ width: "100%", padding: "8px", fontSize: "16px", border: "1px solid #ccc", borderRadius: "4px", height: "100px" }} />
                </div>
                <div>
                    <button type="submit" style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "4px", cursor: "pointer", marginRight: "10px" }}>Thêm tin</button>
                    <button type="button" onClick={handleReset} style={{ padding: "10px 20px", fontSize: "16px", backgroundColor: "#dc3545", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>Nhập lại</button>
                </div>
            </form>
        </div>
    );
};

export default FormComponent;