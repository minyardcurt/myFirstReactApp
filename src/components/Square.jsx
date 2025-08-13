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
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        borderRadius: '8px',
      }}
    >
      {name}
    </div>
  );
}

export default Square;