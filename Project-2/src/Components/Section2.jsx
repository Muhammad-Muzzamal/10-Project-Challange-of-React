const Section2 = () => {
  return (
    <div className="sec-2">
      <div className="help">
        <div className="first">
          <div className="support">
            <button>VIA SUPPORT CHAT</button>
            <button>VIA CALL</button>
          </div>
          <button className="email">VIA EMAIL FORM</button>
        </div>

        <div className="form">
          <input type="text" id="name" placeholder="Name" />
          <input type="text" id="email" placeholder="Email" />
          <input type="text" id="text" placeholder="Text" />
        </div>
        <div className="submit">
          <button>Submit</button>
        </div>
      </div>
      <div className="second">
        <img src="/images/Service.svg" alt="Service img" />
      </div>
    </div>
  );
};

export default Section2;
