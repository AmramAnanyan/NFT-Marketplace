const PrettyLine = () => {
  return (
    <div
      style={{
        height: '2px',
        width: '100%',
        background:
          'linear-gradient(90deg, transparent,#6722d6,#2596ff ,#a259ff, transparent)',
        transition: 'width 0.5s ease',
        marginTop: '0.5rem'
      }}
    />
  );
};

export default PrettyLine;
