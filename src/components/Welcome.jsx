const Welcome = ({ section }) => {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-4xl font-roboto tracking-wider mb-2">
        {`Welcome to ${section} section!`}
      </h2>
      <p className="font-roboto tracking-wider">Select a Tag to View</p>
    </div>
  );
};
export default Welcome;
