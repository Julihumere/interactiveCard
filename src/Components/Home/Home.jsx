import React, { useState } from "react";
import "./Home.css";
export default function Home() {
  const [form, setForm] = useState(false);
  const [error, setError] = useState({});
  const [detail, setDetail] = useState({
    name: "",
    number: "0000 0000 0000 0000",
    MM: "00",
    YY: "00",
    cvc: "000",
  });

  const onChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  };
  const formSubmit = () => {
    setForm(!form);
    setDetail({
      name: "",
      number: "0000 0000 0000 0000",
      MM: "00",
      YY: "00",
      cvc: "000",
    });
  };
  const validation = (input) => {
    let errors = {};
    if (!input.name) {
      errors.name = "Can't be blank";
    }
    if (input.number === "0000 0000 0000 0000") {
      errors.number = "Can't be blank";
    } else if (!/^[0-9]+$/.test(input.number)) {
      errors.number = "Wrong format, numbers only";
    }
    if (input.MM === "00") {
      errors.MM = "Can't be blank";
    }
    if (input.YY === "00") {
      errors.YY = "Can't be blank";
    }
    if (input.cvc === "000") {
      errors.cvc = "Can't be blank";
    }
    return errors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setError(validation(detail));
    const err = validation(detail);
    if (Object.values(err).length !== 0) {
      alert("Please, correct the errors");
    } else {
      setDetail(detail);
      setForm(true);
    }
  };

  return (
    <div className="Home__container">
      <div className="Card">
        <div className="Card__front">
          <div className="image">
            <div className="circule__all"></div>
            <div className="circule__none"></div>
          </div>
          <div className="number">
            <h2>
              {detail.number
                .replace(/\s/g, "")
                .replace(/([0-9]{4})/g, "$1 ")
                .trim()}
            </h2>
          </div>
          <div className="name">
            <h3>{detail.name}</h3>
            <h3>
              {detail.MM} / {detail.YY}
            </h3>
          </div>
        </div>
        <div className="Card__back">
          <h4>{detail.cvc}</h4>
        </div>
      </div>
      {form === false ? (
        <div>
          <form onSubmit={onSubmit} className="Form">
            <div className="cardholder__name">
              <label htmlFor="">CARDHOLDER NAME</label>
              {error.name ? (
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  placeholder="e.g. Jane Appleseed"
                  className="name__input error__input"
                />
              ) : (
                <input
                  type="text"
                  name="name"
                  onChange={onChange}
                  placeholder="e.g. Jane Appleseed"
                  className="name__input"
                />
              )}
              {error.name && <p className="error">{error.name}</p>}
            </div>
            <div className="card__number">
              <label htmlFor="">CARD NUMBER</label>
              {error.number ? (
                <input
                  id="inputNumber"
                  type="text"
                  name="number"
                  onChange={onChange}
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={16}
                  className="number__input error__input"
                />
              ) : (
                <input
                  id="inputNumber"
                  type="text"
                  name="number"
                  onChange={onChange}
                  placeholder="e.g. 1234 5678 9123 0000"
                  maxLength={16}
                  className="number__input"
                />
              )}
              {error.number && <p className="error">{error.number}</p>}
            </div>
            <div className="Form__info">
              <div className="expiration">
                <label htmlFor="">EXP. DATE (MM/YY)</label>
                <div className="expiration__input">
                  <div>
                    {error.MM ? (
                      <input
                        type="text"
                        onChange={onChange}
                        name="MM"
                        placeholder="MM"
                        maxLength={2}
                        className="MM__input error__input"
                      />
                    ) : (
                      <input
                        type="text"
                        onChange={onChange}
                        name="MM"
                        placeholder="MM"
                        maxLength={2}
                        className="MM__input"
                      />
                    )}
                    {error.MM && <p className="error">{error.MM}</p>}
                  </div>
                  <div>
                    {error.YY ? (
                      <input
                        type="text"
                        onChange={onChange}
                        name="YY"
                        placeholder="YY"
                        maxLength={2}
                        className="YY__input error__input"
                      />
                    ) : (
                      <input
                        type="text"
                        onChange={onChange}
                        name="YY"
                        placeholder="YY"
                        maxLength={2}
                        className="YY__input"
                      />
                    )}
                    {error.YY && <p className="error">{error.YY}</p>}
                  </div>
                </div>
              </div>
              <div className="cvc">
                <label htmlFor="">CVC</label>
                {error.cvc ? (
                  <input
                    htmlFor=""
                    name="cvc"
                    onChange={onChange}
                    placeholder="e.g. 123"
                    maxLength={3}
                    className="cvc__input error__input"
                  />
                ) : (
                  <input
                    htmlFor=""
                    name="cvc"
                    onChange={onChange}
                    placeholder="e.g. 123"
                    maxLength={3}
                    className="cvc__input"
                  />
                )}
                {error.cvc && <p className="error">{error.cvc}</p>}
              </div>
            </div>
            <button className="button" type="submit">
              Confirm
            </button>
          </form>
        </div>
      ) : (
        <div className="complete__state">
          <span className="img_verify"></span>
          <h1>THANK YOU!</h1>
          <h3>We've added your card details</h3>
          <button className="button" onClick={formSubmit}>
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
