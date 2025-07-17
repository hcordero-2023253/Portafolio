import { useEffect, useState } from "react"
import Mondal from "react-modal"

Mondal.setAppElement("#root")

export const Welcome = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

  return (
    <Mondal
    isOpen={isOpen}   
    onRequestClose={() => setIsOpen(false)}
    style={{
        content: {
            maxWidth: '550px',
            maxHeight: '280px',
            margin: 'auto',
            padding: '32px 28px',
            borderRadius: '18px',
            color: '#222',
            background: 'linear-gradient(135deg, #f8fafc 60%, #e0f7fa 100%)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
            fontFamily: "'Segoe UI', 'Roboto', 'Arial', sans-serif",
            border: 'none',
            transition: 'all 0.4s cubic-bezier(.25,.8,.25,1)',
            animation: 'fadeIn 0.7s',
        },
        overlay: {
            backgroundColor: 'rgba(44, 62, 80, 0.25)',
            backdropFilter: 'blur(2px)'
        }
    }}>
    <style>
        {`
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-30px);}
            to { opacity: 1; transform: translateY(0);}
        }
        `}
    </style>
    <h2 style={{
        marginBottom: '12px',
        fontWeight: 700,
        fontSize: '2rem',
        color: '#1976d2',
        letterSpacing: '1px',
        textAlign: 'center'
    }}>
        ¡Bienvenido/a a mi portafolio!
    </h2>
    <p style={{
        fontSize: '1.1rem',
        color: '#444',
        marginBottom: '24px',
        textAlign: 'center',
        lineHeight: 1.6
    }}>
        Este es un espacio donde podrás ver mis proyectos y habilidades.<br />
        ¡Espero que disfrutes explorando lo que he creado! 😊
    </p>
    <button 
        onClick={() => setIsOpen(false)}
        style={{
            padding: '10px 28px',
            background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            fontSize: '1rem',
            boxShadow: '0 2px 8px rgba(67, 233, 123, 0.15)',
            transition: 'background 0.2s'
        }}
        onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #38f9d7 0%, #43e97b 100%)'}
        onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)'}
    >
        Cerrar
    </button>
</Mondal>
  )
}
