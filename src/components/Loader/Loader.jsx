import { Circles } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <StyledLoaderWrapper>
      <Circles
        height="80"
        width="80"
        color="#fafffa"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </StyledLoaderWrapper>
  );
};

export default Loader;
