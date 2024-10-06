import styled from "styled-components";

const HeroStyled = styled.div`
  .hero-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem 10rem 7rem 2.5rem;
    background-image: url(${(props) => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 52rem;
    color: #fff;

    h5 {
      padding-bottom: 1rem;
      font-size: 2rem;
      color: #dadde1;
    }
    h3 {
      line-height: 1.3;
      font-size: 3rem;
    }

    p {
      font-size: 2rem;
      padding: 3rem 0;
      color: #f2fcee;
    }

    .btn {
      padding: 1rem 2.5rem;
      font-size: 1.7rem;
      border-radius: 0.5rem;
      border: 1px solid #198754;
      background: #198754;
      transition: all ease 0.3s;
      color: #fff;
    }
    .btn:hover {
      cursor: pointer;
      background: transparent;
    }
    .social-media {
      display: flex;
      padding-top: 2rem;

      .social-media-handles svg {
        margin-right: 2rem;
        transition: all ease 0.5s;
      }

      .social-media-handles svg:hover {
        cursor: pointer;
        transform: scale(1.2);
      }
      h4 {
        font-size: 2rem;
        padding-right: 2rem;
      }

      svg {
        font-size: 2rem;
      }
    }

    .hero-img {
      width: 30rem;
      height: 30rem;
      border-radius: 1rem;
      overflow: hidden;

      img {
        width: 100%;
        height: 30rem;
        object-fit: cover;
      }
    }
    @media screen and (max-width: 56.25em) {
      width: 100%;
      max-width: 100%;
    flex-direction: column;
    height: 80rem;
    padding-top: 3rem;

    .hero-img{
      width: auto;
      text-align: center;
    }
  }
  }
`;

export default HeroStyled;
