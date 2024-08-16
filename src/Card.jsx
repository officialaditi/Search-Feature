const Card = ({ person }) => {
  return (
    <div>
      <div className="cards">
        <h1>Card:- {person.name}</h1>
        <p>Email: {person.email}</p>
        <h2>City: {person.address.city}</h2>
        <h3>username: {person.username}</h3>
        
      </div>
    </div>
  );
};
export default Card;
