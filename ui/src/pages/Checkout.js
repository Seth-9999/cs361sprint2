const KeyRules = () => {
  return (
    <>
      <h1>Checkout and Hold Rules</h1>
      <p>Checkout Rules:</p>
      <ul>
        <li>Max 10 items at a time</li>
        <li>Items are yours for 14 calendar days</li>
        <li>Fee $0.10/day for each day late (~ 1 day grace period)</li>
        <li>
          Can't check out any new items if you have fee on your account (even
          $0.01)
        </li>
      </ul>
      <br></br>
      <p>Hold/Reserving Rules</p>
      <ul>
        <li>Max 5 holds at a time. Holds must be picked up within 72 hours</li>
        <ul>
          <li>see hold shelf for your items</li>
        </ul>
        <li>Conference rooms can be reserved for max 1 week in advance</li>
        <li>
          {" "}
          Can't check out any new items if you have fee on your account (even
          $0.01)
        </li>
      </ul>
    </>
  );
};

export default KeyRules;
