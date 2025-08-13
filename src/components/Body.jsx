import Square from './Square';

function Body() {
  const squareList = [
    { name: 'square 1', bgImage: 'linear-gradient(to right, #ff7e5f, #feb47b)' },
    { name: 'square 2', bgImage: 'linear-gradient(to left, #6a11cb, #2575fc)' },
    { name: 'square 3', bgImage: 'linear-gradient(to top, #8e9eab, #eef2f3)' },
  ];

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
        src="/me.jpg"
        alt="My photo"
        style={{
          width: '50%',
          maxHeight: '300px',
          borderRadius: '10px',
          marginBottom: '20px',
        }}
      />
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        This is what a serious coder looks like, when he is winning!
      </p>
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {squareList.map((item) => (
          <Square key={item.name} name={item.name} bgImage={item.bgImage} />
        ))}
      </div>
    </main>
  );
}

export default Body;
