import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 470px;
  height: 450px;
`;

export const HeaderImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: rgb(196, 156, 156);
  border-radius: 30px;
`;

export const HeaderText = styled.div`
  font-size: 25px;
  margin: 5px;
  margin-bottom: 10px;
`;

export const SignInBtn = styled.button`
  margin 10px;
  min-width: 64px;
  width: 100%;
  background-color: #3f51b5;
  color: #fff;
  font-size: 0.875rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 500;
  text-transform: uppercase;
  outline: none !important;
  padding: 6px 16px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  border: none;
  :hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    background-color: #303f9f;
  }
  :active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }
`;
export const HeaderImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const HeaderSignIn = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextField = styled.input`
  margin 5px;
  width: 100%;
  height: 45px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none !important;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
`;
export const CheckboxContainer = styled.form`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  margin-left: -11px;
  margin-right: 330px;
  vertical-align: middle;
  -webkit-tap-highlight-color: transparent;
`;

export const Checkbox = styled.input`
  cursor: pointer;
  width: 15px;
  height: 15px;
`;

export const SignInFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  width: 450px;
  flex-wrap: wrap;
`;
