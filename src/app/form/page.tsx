"use client";

import { useState } from "react";

export default function FormPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const handleSubmit = async () => {
        setStatus("Enviando...");

        const res = await fetch("/api/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, message }),
        });

        const data = await res.json();
        if (data.success) {
            setStatus("Mensaje enviado ✅");
            setName("");
            setMessage("");
        } else {
            setStatus("Error al enviar ❌");
        }
    };

    return (
        <div style={{ padding: 20 }}>
            <h2>Formulario de saludo</h2>
            <input
                type="text"
                placeholder="Tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ display: "block", marginBottom: 10 }}
            />
            <input
                type="text"
                placeholder="Tu mensaje"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ display: "block", marginBottom: 10 }}
            />
            <button onClick={handleSubmit}>SEND DATA</button>
            <p>{status}</p>
        </div>
    );
}
