import Square from './Square';

function Body() {
  const squares = [
    { name: 'square 1', bgImage: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
    { name: 'square 2', bgImage: 'linear-gradient(to left, #6a11cb, #2575fc)' },
    { name: 'square 3', bgImage: 'linear-gradient(to top, #8e9eab, #eef2f3)' },
  ];

  return (
    <main
      style={{
        backgroundColor: '#04b7bdff',
        flex: 1,
        padding: '1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', 
      }}
    >
      <img
        src="/me.jpg"
        alt="Descriptive"
        style={{
          width: '50%',
          maxHeight: '300px',
          objectFit: 'cover',
          borderRadius: '16px',
          marginBottom: '1rem',
        }}
      />

      <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '600px' }}>
        This is what a serious coder looks like, When He is Winning!
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          width: '100%',
          maxWidth: '700px',
        }}
      >
        {squares.map((square) => (
          <Square key={square.name} name={square.name} bgImage={square.bgImage} />
        ))}
      </div>
    </main>
  );
}

export default Body;