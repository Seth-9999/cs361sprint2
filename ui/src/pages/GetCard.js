const GetCard = () => {
  return (
    <>
      <h1>Library Card Application Form</h1>
      <p>
        After submitting the below form, please see{" "}
        <strong>front desk librarian</strong> at our branch to
      </p>
      <ul>
        <li>Get your new card!</li>
        <li>pick your pin#</li>
      </ul>
      <br></br>
      <label>Name (First Middle Last)</label>
      <input placeholder="John Anonymous Doe"></input>
      <br></br>
      <label>Address</label>
      <input placeholder="1234 Park Avenue"></input>
      <br></br>
      <label>City</label>
      <input placeholder="San Francisco"></input>
      <br></br>
      <label>State</label>
      <select>
        {/* https://react.dev/reference/react-dom/components/select */}
        <option value="AZ">AZ-Arizona</option>
        <option value="CA">CA-California</option>
        <option value="OR">OR-Oregon</option>
      </select>
      <br></br>

      <br></br>
      <button>Get Card (Not Implemented)</button>
    </>
  );
};

export default GetCard;
