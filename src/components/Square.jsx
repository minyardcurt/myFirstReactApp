function Square({ name, bgImage }) {
  return (
    <div
      style={{
        width: '120px',
        height: '120px',
        backgroundImage: bgImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: '1.2rem',
        borderRadius: '8px',
        boxShadow: '0 0 8px rgba(0,0,0,0.3)',
      }}
    >
      {name}
    </div>
  );
}

export default Square;