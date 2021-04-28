const Switch = (props) => {
  console.log(props);
  return (
    <div className="switch">
      <button
        className={props.switch ? "push" : "unpush"}
        // click sur boutton ON
        onClick={() => {
          props.setSwitch(true);
        }}
      >
        ON
      </button>

      <button
        className={props.switch ? "unpush" : "push"}
        // click sur boutton OFF
        onClick={() => {
          props.setSwitch(false);
        }}
      >
        OFF
      </button>
    </div>
  );
};

export default Switch;
