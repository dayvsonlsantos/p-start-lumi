import styled from "styled-components";

export const MainTeam = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SectionTeam = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
`;

export const AsideTeam = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
  height: 25%;
  margin: 1rem;
  box-sizing: border-box;

  @media (max-width: 1200px){
    flex-direction: column;
  }
`;

export const PictureTeam = styled.img`
  display: block;
  margin: 2rem 2rem;
  width: 20rem;
  height: 100%;
  align-items: center;
  border-radius: 100%;
  box-shadow: 0px 5px 12px 0px rgba(0, 0, 0, 0.135);
  @media (max-width: 1200px){
    order: 1;
  }
  @media(max-width: 700px){
    width: 45%;
  }
  @media(max-width: 500px){
    width: 60%;
  }
`;

export const AboutTeam = styled.div`
  display: flex;
  padding: 2rem;
  width: 45rem;
  height: 100%;
  align-self: center;
  flex-direction: column;
  text-indent: 2rem;
  text-align: justify;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.view_background};
  color: ${({ theme }) => theme.user_input_value};
  transition: all 0.5s ease;
  @media (max-width: 1200px){
    order: 2;
  }
  @media(max-width: 900px){
    width: 90%;
  }
`;

export const Links = styled.div`
    display: flex;
    align-self: center;
    flex-direction: row;
    margin-top: 1.5rem;
`
