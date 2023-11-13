import React from 'react';
import { LoadingContainer } from './Loading.styled';
import Loader from 'components/Loader/Loader';

const Loading = () => {
  return (
    <LoadingContainer>
      <div className="loaderSecond">
        <span>
          <Loader />
        </span>
      </div>
    </LoadingContainer>
  );
};
export default Loading;
