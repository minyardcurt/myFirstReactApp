import Square from './Square';

function Body() {
  const square1 = { name: 'square 1', bgImage: 'linear-gradient(to right, #ff7e5f, #feb47b)' };
  const square2 = { name: 'square 2', bgImage: 'linear-gradient(to left, #6a11cb, #2575fc)' };
  const square3 = { name: 'square 3', bgImage: 'linear-gradient(to top, #8e9eab, #eef2f3)' };

  return (
    <main
      style={{
        backgroundColor: '#04b7bd',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <img
        src="./me.jpg"
        alt="My photo"
        style={{
          width: '50%',
          maxHeight: '300px',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      />
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        This is what a serious coder looks like, when he is winning!,
        K.Rose wishes he might look this good at 55.
      </p>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Square name={square1.name} bgImage={square1.bgImage} />
        <Square name={square2.name} bgImage={square2.bgImage} />
        <Square name={square3.name} bgImage={square3.bgImage} />
      </div>
    </main>
  );
}

export default Body;
