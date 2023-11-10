import React from 'react';
import PropTypes from 'prop-types';

import { StyledNotificationText } from './Notificatio.styled';

export const Notificatio = ({ message }) => {
  return <StyledNotificationText>{message}</StyledNotificationText>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
