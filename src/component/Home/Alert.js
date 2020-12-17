import React from 'react';
import styled from 'styled-components';
import device from '../responsive/Device';
import { keyframes } from 'styled-components';

const ResultFadeIn = keyframes`
  to {
    opacity: 1;
        visibility: visible;
        top: 0;
  }
`;

const Alerts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  opacity: 0;
  visibility: hidden;
  position: relative;
  margin-left: 25px;
  margin-right: 25px;
  animation: ${ResultFadeIn} 0.5s 1.4s forwards;
  @media ${device.mobileL} {
    flex-basis: 100%;
  }
`;

const AlertWrapper = styled.div`
  flex-basis: 100%;
  max-width: 100%;
  display: grid;
  border: 4px solid white;
  color: white;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(50px,1fr));
  grid-gap: 1rem;
`;

const Alert = ({ alerts }) => {
  const {
    sender,
    event,
  } = alerts;

  alerts = null;
  console.log(sender);

  return(
    <Alerts>
      <AlertWrapper>
        <p><b>{sender}</b></p>
        {event}
      </AlertWrapper>
    </Alerts>
  );

}

export default Alert;
