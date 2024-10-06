import styled from "styled-components";

const ContactStyled = styled.div`
  .Contact {
    max-width: 100%;
    background: #352657;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 0px 30px 20px 70px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .contact-info {
    width: 50rem;
    margin-top: 70px;
    background: #312d6f;
    color: white;
    border-radius: 20px;
    padding-bottom: 10px;
    text-align: center;

    .contact-title {
      padding-top: 2rem;
      font-size: 25px;
    }
    h3 {
      font-size: 3.5rem;
      font-weight: 700;
      padding: 3rem 0 1rem 0;
    }
    input {
      width: 240px;
      border-radius: 5px;
      height: 3.2rem;
      margin: 1rem 0;
    }

    textarea {
      border-radius: 5px;
      margin: 1rem 0;
    }
    .btn {
      padding: 1rem 2rem;
      font-size: 1.7rem;
      border-radius: 0.7rem;
      background: #198754;
      color: #fff;
      border: none;
      cursor: pointer;
    }
  }

  .world-map {
    margin-top: 80px;
    position: relative;
    width: 400px;
    height: 400px;
    overflow: hidden;
  }

  .world-map img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform-origin: center center;
  }
  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .rotating-earth {
    animation: rotate 20s linear infinite;
  }
`;

export default ContactStyled;
