import React from 'react';

import { Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

import { ContentErrorContainer } from './styles';

interface NotFoundContentProps {
  message: string;
  height: number | string;
  width: number | string;
}

const ContentError: React.FC<NotFoundContentProps> = ({
  message,
  ...props
}) => (
  <ContentErrorContainer {...props}>
    <Typography variant="h5" color="GrayText">
      <ErrorOutlineIcon fontSize="large" />
      {message}
    </Typography>
  </ContentErrorContainer>
);

export default ContentError;
