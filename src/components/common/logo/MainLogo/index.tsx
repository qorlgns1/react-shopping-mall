import mainlogo from '../../../../assets/logo/Logo-hodu.png';
import { LogoImg, LogoImgSize } from './style';
import PropTypes from 'prop-types';

export default function MainLogo({ size, ...props }: LogoImgSize) {
  return <LogoImg src={mainlogo} alt='호두마켓 로고' size={size} {...props} />;
}

MainLogo.propTypes = {
  size: PropTypes.object.isRequired,
};
