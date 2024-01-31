const Notification = (props) => {
  const { cardContainer, imgIcon, textContent } = props;
  return (
    <div className={cardContainer}>
      <img src={imgIcon} className="img-style" />
      <p className="style_text">{textContent}</p>
    </div>
  );
};

const element = (
  <div className="bg-container">
    <h1 className="top-heading">Notifications</h1>
    <Notification
      cardContainer="message-card"
      imgIcon="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
      textContent="Information Message"
    />
    <Notification
      cardContainer="success-message-card"
      imgIcon="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
      textContent="Success Message"
    />
    <Notification
      cardContainer="warning-message-card"
      imgIcon="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
      textContent="Warning Message"
    />
    <Notification
      cardContainer="error-message-card"
      imgIcon="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
      textContent="Error Message"
    />
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
